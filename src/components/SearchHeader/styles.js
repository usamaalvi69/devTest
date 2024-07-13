import {StyleSheet} from 'react-native';
import {screenWidth} from '../../constant/dimensions';

export const createStyles = colors =>
  StyleSheet.create({
    header: {
      height: 50,
      width: screenWidth,
      flexDirection: 'row',
      alignItems: 'center',
      alignSelf: 'center',
      justifyContent: 'space-between',
      paddingHorizontal: 20,
      backgroundColor: colors.white,
      marginBottom: 15
    },
    headerLabel: {color: '#000', fontSize: 16, fontFamily: 'Poppins-Medium'},
    back: {flexDirection: 'row', alignItems: 'center'},
  });
