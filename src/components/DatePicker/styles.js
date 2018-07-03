import { StyleSheet, Platform } from 'react-native';
import { metrics } from '../../themes';

export default StyleSheet.create({
  ...Platform.select({
    ios: {
      pickerViewContainer: {
        paddingTop: metrics.screenHeight / 1.5,
      },
      pickerView: {
        height: metrics.screenHeight - (metrics.screenHeight / 1.5),
      },
      pickerViewTop: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        height: 40,
        borderTopWidth: 0.5,
        borderTopColor: '#919498',
        backgroundColor: '#EFF1F2',
      },
      pickerViewBottom: {
        flex: 1,
        backgroundColor: '#D0D4DB',
      },
    },
  }),
});
