import {ActivityIndicator, View} from 'react-native';

import React from 'react';

import {createStyles} from './styles';
import {useTheme} from '@react-navigation/native';

export const Loader = ({loading}) => {
  const {colors} = useTheme();
  const styles = createStyles(colors);
  return (
    <>
      {loading ? (
        <View style={styles.loadStyle}>
          <ActivityIndicator color={colors.primary} size={'large'} />
        </View>
      ) : null}
    </>
  );
};
