import { css, DefaultTheme } from 'styled-components';

export const darkTheme: DefaultTheme = {
  colors: {
    background: '#1C1C1C',
    foreground: '#F0F0F0',
    white: '#FFF',
    muted: {
      lighter: '#3d3d3d',
      light: '#525252',
      main: '#9E9E9E',
    },
    card: {
      light: '#3d3d3d',
      main: '#292929',
    },
    accent: {
      light: '#3d3d3d',
      main: '#656565',
      dark: '#7c7c7c',
    },
    primary: {
      lighter: '#EDEFFB',
      light: '#5672ff',
      main: '#3647f5',
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
