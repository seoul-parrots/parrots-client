import { Global, ThemeProvider } from '@emotion/react';
import { globalStyles } from '@style';

const App = () => {
  return (
    <ThemeProvider theme={{}}>
      <Global styles={globalStyles} />
      <div>Parrots</div>
    </ThemeProvider>
  );
};

export default App;
