import {StatusBar, StyleSheet} from 'react-native';
 

const STATUSBAR_HEIGHT = StatusBar.currentHeight;
const APPBAR_HEIGHT = Platform.OS === 'ios' ? 44 : 56;

export const createStyles = (colors) => StyleSheet.create({
  statusBar: {
    height: STATUSBAR_HEIGHT,
  },
  appBar: {
    backgroundColor: colors.bg,
    height: APPBAR_HEIGHT,
  },
});
