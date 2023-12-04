import { DefaultTheme } from 'react-native-paper';

const theme = {
  ...DefaultTheme,
  dark: true,
  mode: 'exact',
  roundness: 0,
  colors: {
    ...DefaultTheme.colors,
    primary: "#445d48",
    secondary: "#d6cc99",
    headerColor: "#001524",
    backgroundColor: "#fde5d4",
  },
};

export default theme;
