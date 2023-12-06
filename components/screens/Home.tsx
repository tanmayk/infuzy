import { useEffect, useState } from 'react';
import { View, Image } from 'react-native';
import { useTheme, Text, ActivityIndicator } from 'react-native-paper';
import axios from 'axios';
import CommonLayout from '../../components/layout/CommonLayout';
import CocktailList from '../../components/cocktail/CocktailList';

// API URL.
const apiUrl = process.env.API_URL;

export default function Home() {
  const theme = useTheme();
  // Default states.
  const [cocktails, setCocktails] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRandomCocktails = async () => {
      const requests = Array.from({ length: 12 }, () => axios.get(`${apiUrl}/random.php`));
      try {
        const responses = await Promise.all(requests);
        const cocktails = responses.map(response => response.data.drinks[0]);
        setCocktails(cocktails);
      }
      catch (error) {
        console.error('Error fetching data:', error);
      }
      finally {
        // Set loading to false regardless of success or failure.
        setLoading(false);
      }
    };
    fetchRandomCocktails();
  }, []);

  return (
    <>
      {isLoading ? (
        <View styles={{padding:10}}>
          <ActivityIndicator animating={true} color={theme.colors.primary} size="large" />
        </View>
      ) : (
      <CocktailList cocktails={cocktails} />
      )}
    </>
  );
};
