import { StyleSheet } from 'react-native';
import { colors } from '../../themes';

export default StyleSheet.create({
  flex: { flex: 1 },
  container: {
    flexDirection: 'row',
    position: 'absolute',
    left: 0,
    right: 0,
    height: 40,
    backgroundColor: colors.danger
  },
  height: {
    justifyContent: 'center',
    height: 40,
    paddingLeft: 12,
    paddingRight: 12
  },
  text: {
    fontSize: 12,
    color: '#FFFFFF'
  }
});
