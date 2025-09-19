import { MoonIcon, SunIcon } from 'lucide-react';

import { useTheme } from '@app/contexts/ThemeProvider';

import Button from './Button';

export function ThemeSwitcher() {
  const { toogleTheme, theme } = useTheme();

  return (
    <Button
      style={{
        width: '4.0rem',
        height: '4.0rem',
        padding: 0,
      }}
      $variant="outline"
      type="button"
      onClick={toogleTheme}
    >
      {theme === 'dark' && <SunIcon size={20} />}
      {theme === 'default' && <MoonIcon size={20} />}
    </Button>
  );
}
