import { extendTheme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

// 2. Call `extendTheme` and pass your custom values
const customTheme = extendTheme({
  styles: {
    global: props => ({
      body: {},
      h1: {
        fontSize: '1.8rem',
      },
    }),
  },
  colors: {
    brand: 'rgb(121, 75, 196)',
    background: {
      100: 'rgb(61, 84, 102)',
      200: 'rgb(56, 68, 77)',
      300: 'rgb(21,32,43)',
    },
  },
  config: {
    useSystemColorMode: true,
    initialColorMode: 'dark',
  },
});

export default customTheme;