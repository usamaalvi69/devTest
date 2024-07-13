import {StyleSheet} from 'react-native';
 
import {screenHeight} from '../../constant/dimensions';
export const createStyles = (colors) => StyleSheet.create({
  loadStyle: {
    position: 'absolute',
    top: screenHeight / 2.6,
    height: 100,
    width: 200,
    borderRadius: 5,
    justifyContent: 'center',
    alignSelf: 'center',
    backgroundColor: colors.bg,
  },
});
