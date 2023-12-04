import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider as PaperProvider } from 'react-native-paper';
import theme from './theme';
import CommonLayout from './components/layout/CommonLayout';
import Home from './components/screens/Home';

export default function App() {
  return (
    <SafeAreaProvider>
      <PaperProvider theme={theme}>
        <Home />
      </PaperProvider>
    </SafeAreaProvider>
  );
}
