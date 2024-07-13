import {Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import {createStyles} from './styles';
import {useTheme} from '@react-navigation/native';

export const Btn = ({title, onPress, style, border, auto}) => {
  const {colors} = useTheme();
  const styles = createStyles(colors);
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.btn, style, border && styles.borderBtn, auto && styles.auto]}>
      {border && <Entypo name="controller-play" size={18} color={colors.white} />}
      <Text style={styles.btnLabel}>{title}</Text>
    </TouchableOpacity>
  );
};
