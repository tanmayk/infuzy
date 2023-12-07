import { ReactNode } from 'react';
import { View, StyleSheet } from 'react-native';
import { Appbar, useTheme } from 'react-native-paper';

interface CommonLayoutProps {
  children: ReactNode;
}

export default function CommonLayout({ children }: CommonLayoutProps) {

  const theme = useTheme();

  return (
    <View style={[
      styles.container,
      {
        backgroundColor: theme.colors.backgroundColor,
        color: theme.colors.primary
      }
    ]}>
      <Appbar.Header
        style={[
          styles.header,
          {
            backgroundColor: theme.colors.headerColor
          }
        ]}
        elevated>
        <Appbar.Content
          titleStyle={[
            theme.fonts.headlineMediumBold,
            styles.headerText,
            {
              color: theme.colors.secondary
            }
          ]}
          title="Infuzy" />
      </Appbar.Header>
      <View style={styles.content}>{children}</View>
    </View>
  );
}

// Styles for common layout.
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 0,
  },
  headerText: {
    width: '100%',
    textAlign: 'center',
    flex: 1,
    paddingTop: 15,
  },
  content: {
    flex: 1,
    padding: 10,
  },
});
