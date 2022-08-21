import { Global, ThemeProvider } from '@emotion/react';
import { globalStyles } from '@styles';
import { AuthProvider } from '@contexts/AuthContext';
import { Toaster } from 'react-hot-toast';
import Router from './Router';

const App = () => {
  return (
    <ThemeProvider theme={{}}>
      <AuthProvider>
        <Global styles={globalStyles} />
        <Router />
        <Toaster />
      </AuthProvider>
    </ThemeProvider>
  );
};

export default App;
