import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider as PaperProvider } from 'react-native-paper';
import theme from './theme';
import CommonLayout from './components/layout/CommonLayout';
import Home from './components/screens/Home';
import { useFonts, JosefinSans_400Regular, JosefinSans_600SemiBold, JosefinSans_700Bold } from '@expo-google-fonts/josefin-sans';

export default function App() {

  let [fontsLoaded, fontError] = useFonts({
    JosefinSans_400Regular, JosefinSans_600SemiBold, JosefinSans_700Bold,
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <SafeAreaProvider>
      <PaperProvider theme={theme}>
        <CommonLayout>
          <Home />
        </CommonLayout>
      </PaperProvider>
    </SafeAreaProvider>
  );
}
