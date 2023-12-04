import { useEffect, useState } from 'react';
import { View, Image } from 'react-native';
import { useTheme, Text, ActivityIndicator } from 'react-native-paper';
import axios from 'axios';
import CommonLayout from '../../components/layout/CommonLayout';

export default function Home() {
  const theme = useTheme();

  // API URL.
  const apiUrl = process.env.API_URL;
  // Default states.
  const [cocktail, setCocktail] = useState(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRandomCocktail = async () => {
      try {
        const response = await axios.get(`${apiUrl}/random.php`);
        const cocktail = response.data.drinks[0];
        setCocktail(cocktail);
      }
      catch (error) {
        console.error('Error fetching data:', error);
      }
      finally {
        // Set loading to false regardless of success or failure.
        setLoading(false);
      }
    };
    fetchRandomCocktail();
  }, []);

  return (
    <CommonLayout>
      <View style={{
        width: '100%',
        fontSize: 24,
        fontWeight: 'bold',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        {isLoading ? (
          <ActivityIndicator animating={true} color={theme.colors.primary} />
        ) : (
        <>
          <Image
            source={{ uri: cocktail.strDrinkThumb }}
            style={{ width: '100%', height: 400, marginBottom: 10 }}
          />
          <Text style={{
            width: '100%',
            fontSize: 24,
            fontWeight: 'bold',
            textAlign: 'center'
          }}>
            {cocktail.strDrink}
          </Text>
          <Text>Glass: {cocktail.strGlass}</Text>
          <Text>{cocktail.strInstructions}</Text>
        </>
        )}
      </View>
    </CommonLayout>
  );
};
