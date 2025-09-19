import { BrowserRouter } from 'react-router';
import * as StyledComponents from 'styled-components';

import { ThemeContext, ThemeProvider } from '@app/contexts/ThemeProvider';
import { Router } from '@app/Router';
import { GlobalStyles } from '@views/assets/styles/global';
import { themes } from '@views/assets/styles/themes';

export function App() {
  return (
    <ThemeProvider>
      <ThemeContext.Consumer>
        {({ theme }) => (
          <StyledComponents.ThemeProvider theme={themes[theme]}>
            <GlobalStyles />
            <BrowserRouter>
              <Router />
            </BrowserRouter>
          </StyledComponents.ThemeProvider>
        )}
      </ThemeContext.Consumer>
    </ThemeProvider>
  );
}
