import { useState } from 'react';
import { Image } from 'react-native';

export default function CocktailImage({imageSrc, alt}) {
  const placeholderImage = require('../../assets/placeholder-cocktail.png');

  return (
    <Image
      style={{ width: '100%', height: 200, marginBottom: 2 }}
      source={{uri: imageSrc}}
      loadingIndicatorSource={{placeholderImage}}
    />
  );
};
