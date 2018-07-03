import { Asset } from 'expo';
import { Image } from 'react-native';
import theme from '../themes';

export const cacheAsync = image => {
  if(typeof image === 'string')
    return Image.prefetch(image);
  return Asset.fromModule(image).downloadAsync();
};

export const icons = () => {
  return Object.values(theme.icons).map(icon => {
    return cacheAsync(icon);
  });
};

export const images = () => {
  return Object.values(theme.images).map(image => {
    return cacheAsync(image);
  });
};

const cacheAssets = {
  icons,
  images
}

export default cacheAssets;
