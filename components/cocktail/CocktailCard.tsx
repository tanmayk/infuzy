import { View, StyleSheet } from 'react-native';
import { Text } from 'react-native-paper';
import CocktailImage from '../../components/base/CocktailImage';

export default function CocktailCard({ cocktail }) {
  return (
    <View style={styles.container}>
      <CocktailImage
        imageSrc={cocktail.strDrinkThumb}
      />
      <Text style={styles.cocktailName}>
        {cocktail.strDrink}
      </Text>
    </View>
  );
}

// Styles for cocktail card.
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 2,
    alignItems: 'center',
    marginBottom: 16,
  },
  cocktailName: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
