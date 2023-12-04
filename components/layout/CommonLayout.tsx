import { ReactNode } from 'react';
import { View, StyleSheet } from 'react-native';
import { Appbar, BottomNavigation, Text, useTheme } from 'react-native-paper';

interface CommonLayoutProps {
  children: ReactNode;
}

export default function CommonLayout({ children }: CommonLayoutProps) {

  const theme = useTheme();

  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    header: {
      alignItems: 'center',
      justifyContent: 'center',
      paddingBottom: 20,
    },
    headerText: {
      width: '100%',
      fontSize: 28,
      fontWeight: 'bold',
      textAlign: 'center',
      flex: 1,
      paddingTop: 20,
    },
    content: {
      flex: 1,
      padding: 10,
    },
  });

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
            styles.headerText,
            {
              color: theme.colors.secondary
            }
          ]}
          title="Infuzy" />
      </Appbar.Header>
      <View style={styles.content}>{children}</View>
      {/* Add other common elements here */}
    </View>
  );
}
