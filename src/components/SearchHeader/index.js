import {Text, View} from 'react-native';
import React from 'react';
import {useTheme} from '@react-navigation/native';
import {createStyles} from './styles';
import Icon, {Icons} from '../Icons/Icons';

export const SearchHeader = ({label, onSearch}) => {
  const {colors} = useTheme();
  const styles = createStyles(colors);
  return (
    <View style={styles.header}>
      <Text style={styles.headerLabel}>{label}</Text>
      <Icon
        onPress={onSearch}
        type={Icons.Feather}
        name="search"
        size={24}
        color={colors.primary}
      />
    </View>
  );
};
