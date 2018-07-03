import { StyleSheet } from 'react-native';
import { colors } from '../../themes';

export default StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.dark
  },
  brandContainer: {
    alignItems: 'center',
    paddingTop: 32,
    paddingBottom: 8,
    borderBottomWidth: 2,
    borderBottomColor: 'rgba(0, 0, 0, 0.2)',
    backgroundColor: colors.primary
  },
  brand: {
    width: 125,
    height: 32
  },
  container: {
    flexGrow: 1,
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: 'rgba(255, 255, 255, 0.2)',
  },
  event: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 4
  },
  eventName: {
    flex: 1,
    fontSize: 16,
    color: colors.light
  },
  eventNameActive: {
    flex: 1,
    fontSize: 16,
    color: colors.primary
  },
  eventTimedown: {
    fontSize: 14,
    color: colors.lightActive
  },
  eventTimedownActive: {
    fontSize: 14,
    color: colors.light
  },
  loader: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
