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
import { ParrotsProfile } from '@generated/rest';

interface AuthenticatedAuthContextValues {
  isAuthenticated: true;
  isAuthenticating: false;
  txClient: Awaited<ReturnType<typeof txClient>>;
  queryClient: Awaited<ReturnType<typeof queryClient>>;
  address: string;
  authenticate: () => Promise<void>;
  profile: ParrotsProfile;
  loadProfile: () => Promise<ParrotsProfile>;
}

interface UnauthenticatedAuthContextValues {
  isAuthenticated: false;
  isAuthenticating: boolean;
  txClient: null;
  queryClient: null;
  address: null;
  authenticate: () => Promise<void>;
  profile: null;
  loadProfile: () => Promise<void>;
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
  profile: null,
  loadProfile: async () => {},
});

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isAuthenticating, setIsAuthenticating] = useState(true);
  const txClientRef = useRef<Awaited<ReturnType<typeof txClient>> | null>(null);
  const queryClientRef = useRef<Awaited<ReturnType<typeof queryClient>> | null>(
    null
  );
  const [address, setAddress] = useState<string | null>(null);
  const [profile, setProfile] = useState<ParrotsProfile | null>(null);

  const loadProfile = useCallback(async () => {
    if (!address || !queryClientRef.current) return null;
    const response = await queryClientRef.current.queryGetProfileByCreator({
      creator: address,
    });
    if (!response.data.profile) {
      throw new Error('No profile found');
    }
    setProfile(response.data.profile);
    return response.data.profile;
  }, [address]);

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

    try {
      setProfile(await loadProfile());
    } catch (error) {
      console.error(error);
    }

    setAddress(accounts[0].address);
    setIsAuthenticated(true);
    setIsAuthenticating(false);
  }, [loadProfile]);

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
        profile,
        loadProfile,
      } as AuthContextValues),
    [
      address,
      authenticate,
      isAuthenticated,
      isAuthenticating,
      loadProfile,
      profile,
    ]
  );

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);

export const useAuthenticatedAuth = (): AuthenticatedAuthContextValues => {
  const auth = useAuth();
  if (!auth.isAuthenticated) throw new Error('Not authenticated');
  return auth;
};
