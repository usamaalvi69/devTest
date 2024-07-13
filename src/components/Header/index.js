import {Pressable, Text, View} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {createStyles} from './styles';
import {useTheme} from '@react-navigation/native';

export const Header = ({title, onPress}) => {
  const {colors} = useTheme();
  const styles = createStyles(colors);
  return (
    <View style={styles.header}>
      <Pressable style={styles.back} onPress={onPress}>
        <Ionicons name="chevron-back" size={22} color={colors.white} />
        <Text style={styles.txt}>{title}</Text>
      </Pressable>
    </View>
  );
};
