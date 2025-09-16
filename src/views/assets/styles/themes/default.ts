import { css } from 'styled-components';

// eslint-disable-next-line
export const defaultTheme = {
  colors: {
    background: '#F0F0F0',
    black: '#1C1C1C',
    white: '#FFFFFF',
    primary: {
      lighter: '#EDEFFB',
      main: '#0500FF',
    },
    gray: {
      0: '#F0F0F0',
      50: '#F5F5F5',
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
