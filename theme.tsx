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
  fonts: {
    ...DefaultTheme.fonts,
    bodyLarge: {
      ...DefaultTheme.fonts.bodyLarge,
      fontFamily: 'JosefinSans_400Regular',
    },
    bodyMedium: {
      ...DefaultTheme.fonts.bodyMedium,
      fontFamily: 'JosefinSans_400Regular',
    },
    bodySmall: {
      ...DefaultTheme.fonts.bodySmall,
      fontFamily: 'JosefinSans_400Regular',
    },
    default: {
      ...DefaultTheme.fonts.default,
      fontFamily: 'JosefinSans_400Regular',
    },
    defaultBold: {
      ...DefaultTheme.fonts.default,
      fontFamily: 'JosefinSans_600SemiBold',
    },
    displayLarge: {
      ...DefaultTheme.fonts.displayLarge,
      fontFamily: 'JosefinSans_400Regular',
    },
    displayMedium: {
      ...DefaultTheme.fonts.displayMedium,
      fontFamily: 'JosefinSans_400Regular',
    },
    displaySmall: {
      ...DefaultTheme.fonts.displaySmall,
      fontFamily: 'JosefinSans_400Regular',
    },
    headlineLarge: {
      ...DefaultTheme.fonts.headlineLarge,
      fontFamily: 'JosefinSans_400Regular',
    },
    headlineMedium: {
      ...DefaultTheme.fonts.headlineMedium,
      fontFamily: 'JosefinSans_400Regular',
    },
    headlineMediumBold: {
      ...DefaultTheme.fonts.headlineMedium,
      fontFamily: 'JosefinSans_700Bold',
    },
    headlineSmall: {
      ...DefaultTheme.fonts.headlineSmall,
      fontFamily: 'JosefinSans_400Regular',
    },
    labelLarge: {
      ...DefaultTheme.fonts.labelLarge,
      fontFamily: 'JosefinSans_400Regular',
    },
    labelMedium: {
      ...DefaultTheme.fonts.labelMedium,
      fontFamily: 'JosefinSans_400Regular',
    },
    labelSmall: {
      ...DefaultTheme.fonts.labelSmall,
      fontFamily: 'JosefinSans_400Regular',
    },
    titleLarge: {
      ...DefaultTheme.fonts.titleLarge,
      fontFamily: 'JosefinSans_400Regular',
    },
    titleMedium: {
      ...DefaultTheme.fonts.titleMedium,
      fontFamily: 'JosefinSans_400Regular',
    },
    titleSmall: {
      ...DefaultTheme.fonts.titleSmall,
      fontFamily: 'JosefinSans_400Regular',
    },
  },
};

export default theme;
