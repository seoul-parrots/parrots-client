import { Navigate, Outlet, useNavigate } from 'react-router-dom';
import { AuthProvider, useAuth } from '@contexts/AuthContext';
import { useLayoutEffect } from 'react';

const SecureRoute = () => {
  const { isAuthenticated, isAuthenticating, authenticate, profile } =
    useAuth();
  const navigate = useNavigate();

  useLayoutEffect(() => {
    if (!isAuthenticating && !isAuthenticated) {
      authenticate();
    }
    if (isAuthenticated && !profile) {
      navigate('/signup');
    }
  }, [authenticate, isAuthenticated, isAuthenticating, navigate, profile]);

  if (isAuthenticating) {
    return <>Loading...</>;
  }

  if (!isAuthenticated) {
    return <Navigate to="/" />;
  }
  return <Outlet />;
};

export default SecureRoute;
