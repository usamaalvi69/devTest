import {View} from 'react-native';
import React from 'react';
import {createStyles} from './styles';
import {useTheme} from '@react-navigation/native';

export const Separator = ({style}) => {
  const {colors} = useTheme();
  const styles = createStyles(colors);
  return <View style={[styles.separator, style]} />;
};
