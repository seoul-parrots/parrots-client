import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import {
  CHAIN_ID,
  REST_ENDPOINT,
  RPC_ENDPOINT,
  TESTNET_CHAIN_INFO,
} from '@constants';
import { queryClient, txClient } from '@generated';

interface AuthenticatedAuthContextValues {
  isAuthenticated: true;
  isAuthenticating: false;
  txClient: Awaited<ReturnType<typeof txClient>>;
  queryClient: Awaited<ReturnType<typeof queryClient>>;
  address: string;
  authenticate: () => Promise<void>;
}

interface UnauthenticatedAuthContextValues {
  isAuthenticated: false;
  isAuthenticating: boolean;
  txClient: null;
  queryClient: null;
  address: null;
  authenticate: () => Promise<void>;
}

export type AuthContextValues =
  | AuthenticatedAuthContextValues
  | UnauthenticatedAuthContextValues;

export const AuthContext = createContext<AuthContextValues>({
  isAuthenticated: false,
  isAuthenticating: true,
  txClient: null,
  queryClient: null,
  address: null,
  authenticate: async () => {},
});

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isAuthenticating, setIsAuthenticating] = useState(true);
  const txClientRef = useRef<Awaited<ReturnType<typeof txClient>> | null>(null);
  const queryClientRef = useRef<Awaited<ReturnType<typeof queryClient>> | null>(
    null
  );
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

    txClientRef.current = await txClient(offlineSigner, {
      addr: RPC_ENDPOINT,
    });
    queryClientRef.current = await queryClient({ addr: REST_ENDPOINT });

    setAddress(accounts[0].address);
    setIsAuthenticated(true);
    setIsAuthenticating(false);
  }, []);

  useLayoutEffect(() => {
    authenticate();
  }, [authenticate]);

  const values = useMemo(
    () =>
      ({
        isAuthenticated,
        isAuthenticating,
        address,
        txClient: txClientRef.current,
        queryClient: queryClientRef.current,
        authenticate,
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
