import { css } from 'styled-components';

export const defaultTheme = {
  colors: {
    background: '#F0F0F0',
    foreground: '#1C1C1C',
    white: '#FFF',
    muted: {
      lighter: '#F0F0F0',
      light: '#DFDFDF',
      main: '#9E9E9E',
    },
    card: {
      light: '#F0F0F0',
      main: '#FFF',
    },
    accent: {
      light: '#F5F5F5',
      main: '#BDBDBD',
      dark: '#7c7c7c',
    },
    primary: {
      lighter: '#EDEFFB',
      light: '#5672ff',
      main: '#0500FF',
      dark: '#0706cd',
    },
    gray: {
      0: '#F5F5F5',
      50: '#F0F0F0',
      100: '#DFDFDF',
      200: '#9E9E9E',
    },
    danger: {
      light: '#F97171',
      main: '#FC5050',
      dark: '#F63131',
    },
    success: {
      main: '#51CA73',
    },
  },
  shadow: {
    primary: css`
      box-shadow: 0px 1px 2px 0px #00000033;
    `,
    secondary: css`
      box-shadow: 0px 2px 4px 0px #00000033;
    `,
  },
};
