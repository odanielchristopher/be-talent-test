import { BrowserRouter } from 'react-router';
import { ThemeProvider } from 'styled-components';

import { Router } from '@app/Router';
import { GlobalStyles } from '@views/assets/styles/global';
import { defaultTheme } from '@views/assets/styles/themes/default';

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ThemeProvider>
  );
}
