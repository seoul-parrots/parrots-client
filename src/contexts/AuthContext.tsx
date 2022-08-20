import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useMemo,
  useRef,
  useState,
} from 'react';
import { CHAIN_ID, ENDPOINT, TESTNET_CHAIN_INFO } from '@constants';
import { SigningStargateClient } from '@cosmjs/stargate';

interface AuthenticatedAuthContextValues {
  isAuthenticated: true;
  isAuthenticating: false;
  client: SigningStargateClient;
  address: string;
  authenticate: () => Promise<void>;
}

interface UnauthenticatedAuthContextValues {
  isAuthenticated: false;
  isAuthenticating: boolean;
  client: null;
  address: null;
  authenticate: () => Promise<void>;
}

export type AuthContextValues =
  | AuthenticatedAuthContextValues
  | UnauthenticatedAuthContextValues;

export const AuthContext = createContext<AuthContextValues>({
  isAuthenticated: false,
  isAuthenticating: false,
  client: null,
  address: null,
  authenticate: async () => {},
});

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  const cosmosClient = useRef<SigningStargateClient | null>(null);
  const [address, setAddress] = useState<string | null>(null);

  const authenticate = useCallback(async () => {
    setIsAuthenticating(true);

    if (!window.keplr) {
      throw new Error('Keplr is not available');
    }

    await window.keplr.experimentalSuggestChain(TESTNET_CHAIN_INFO);

    await window.keplr.enable(CHAIN_ID);

    const offlineSigner = window.keplr.getOfflineSigner(CHAIN_ID);

    const accounts = await offlineSigner.getAccounts();

    if (!accounts[0]) {
      throw new Error('No accounts found');
    }

    cosmosClient.current = await SigningStargateClient.connectWithSigner(
      ENDPOINT,
      offlineSigner
    );
    setAddress(accounts[0].address);
    setIsAuthenticated(true);
    setIsAuthenticating(false);
  }, []);

  const values = useMemo(
    () =>
      ({
        isAuthenticated,
        isAuthenticating,
        authenticate,
        address,
        client: cosmosClient.current,
      } as AuthContextValues),
    [address, authenticate, isAuthenticated, isAuthenticating]
  );

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);

export const useAuthenticatedAuth = (): AuthenticatedAuthContextValues => {
  const auth = useAuth();
  if (!auth.isAuthenticated) throw new Error('Not authenticated');
  return auth;
};
