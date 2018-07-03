import { Dimensions, Platform } from 'react-native';
import { Constants } from 'expo';

const { statusBarHeight } = Constants;
const { width, height } = Dimensions.get('window');
const screenWidth = width < height? width: height;
const screenHeight = width < height? height: width;
const keyboardOffset = 0;
const keyboardBehavior = 'padding';

const metrics = {
  statusBarHeight,
  screenWidth,
  screenHeight,
  keyboardOffset,
  keyboardBehavior,
  navHeaderHeight: 48 + statusBarHeight,
  navDrawerWidth: screenWidth - (screenWidth * 0.15),
  lineHeight: 1,
  icons: {
    tiny: 16,
    small: 24,
    medium: 30,
    large: 45,
    xl: 50
  },
  images: {
    small: 20,
    medium: 40,
    large: 60,
    logo: 200,
    avatar: 54
  },
  buttons: {
    tiny: 16,
    small: 24,
    medium: 30,
    large: 45,
    xl: 50
  }
};

export default metrics;
