import {StyleSheet} from 'react-native';

export const createStyles = (colors) => StyleSheet.create({
  header: {
    // flex: 0.2,
    height: 50,
    width: '100%',
    justifyContent: 'center',
    // backgroundColor: 'orange',
    paddingHorizontal: 10,
  },
  txt: {color: colors.white, fontSize: 16, marginLeft: 10},
  back: {flexDirection: 'row', alignItems: 'center'},
});
