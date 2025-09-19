/* eslint-disable no-shadow */
import React, { createContext, useCallback, useContext, useState } from 'react';

type Theme = 'dark' | 'default';

interface IThemeProviderProps {
  children: React.ReactNode;
  defaultTheme?: Theme;
  storageKey?: string;
}

type ThemeContextValue = {
  theme: Theme;
  toogleTheme(): void;
};

export const ThemeContext = createContext({} as ThemeContextValue);

export function ThemeProvider({
  children,
  defaultTheme = 'default',
  storageKey = 'be-talent-ui-theme',
  ...props
}: IThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(
    () => (localStorage.getItem(storageKey) as Theme) || defaultTheme,
  );

  const toogleTheme = useCallback(
    () =>
      setTheme((prevState) => {
        const newTheme = prevState === 'default' ? 'dark' : 'default';

        localStorage.setItem(storageKey, newTheme);
        return newTheme;
      }),
    [storageKey],
  );

  const value = {
    theme,
    toogleTheme,
  };

  return (
    <ThemeContext.Provider {...props} value={value}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);

  if (context === undefined)
    throw new Error('useTheme must be used within a ThemeProvider');

  return context;
}
