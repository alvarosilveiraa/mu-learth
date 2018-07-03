import { StyleSheet } from 'react-native';
import { metrics } from '../../themes';

export default StyleSheet.create({
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 100
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  content: {
    width: '100%',
    backgroundColor: '#FFFFFF',
    borderRadius: 3
  }
});
