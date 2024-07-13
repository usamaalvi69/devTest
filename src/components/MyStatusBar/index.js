import {SafeAreaView, StatusBar} from 'react-native';

import React from 'react';
 
 import {createStyles } from './styles';
import { useTheme } from '@react-navigation/native';

export const MyStatusBar = ({backgroundColor, ...props}) => {
  const { colors } = useTheme();
  const styles = createStyles(colors);
  return(
  <SafeAreaView style={[styles.statusBar, {backgroundColor}]}>
    <StatusBar translucent backgroundColor={backgroundColor} {...props} />
  </SafeAreaView>
)};
