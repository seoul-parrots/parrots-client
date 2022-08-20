import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '@contexts/AuthContext';
import { useLayoutEffect } from 'react';

const SecureRoute = () => {
  const { isAuthenticated, isAuthenticating, authenticate } = useAuth();

  useLayoutEffect(() => {
    if (!isAuthenticating && !isAuthenticated) {
      authenticate();
    }
  }, [authenticate, isAuthenticated, isAuthenticating]);

  if (isAuthenticating) {
    return <>Loading...</>;
  }

  if (!isAuthenticated) {
    return <Navigate to="/" />;
  }
  return <Outlet />;
};

export default SecureRoute;
