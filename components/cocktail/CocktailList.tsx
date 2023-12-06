import { View, FlatList, StyleSheet } from 'react-native';
import CocktailCard from './CocktailCard';

export default function CocktailList({ cocktails }) {
  const renderCocktailItem = ({ item }) => (
    <View style={styles.cocktailItem}>
      <CocktailCard cocktail={item} />
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={cocktails}
        renderItem={renderCocktailItem}
        keyExtractor={(item) => item.idDrink.toString()}
        numColumns={2}
      />
    </View>
  );
}

// Styles for cocktail list.
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  cocktailItem: {
    flex: 1,
  },
});
