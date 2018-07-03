import { StyleSheet } from 'react-native';
import { colors, metrics } from '../../themes';

export default StyleSheet.create({
  container: {
    height: metrics.navHeaderHeight,
    backgroundColor: colors.primary,
    paddingTop: metrics.statusBarHeight,
    shadowColor: '#000000',
    shadowOffset: {
      height: 2
    },
    shadowRadius: 6,
    shadowOpacity: 0.2,
    elevation: 10
  },
  statusbar: {
    height: metrics.statusBarHeight,
    backgroundColor: colors.primary
  },
  content: {
    flex: 1,
    position: 'relative',
    flexDirection: 'row',
    alignItems: 'center'
  },
  leftComponent: {
    flex: 1,
    zIndex: 10
  },
  rightComponent: {
    flex: 1,
    zIndex: 10,
    alignItems: 'flex-end'
  },
  centerComponent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    ...StyleSheet.absoluteFillObject
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    maxWidth: metrics.screenWidth - 128,
    color: colors.light
  }
});
