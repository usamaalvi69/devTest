import {ImageBackground, Pressable, Text} from 'react-native';
import React from 'react';

import LinearGradient from 'react-native-linear-gradient';
import {createStyles} from './styles';
import {useNavigation, useTheme} from '@react-navigation/native';

import {NAVIGATION} from '../../constant/navigation';
import {imgURL} from '../../networking/config';
import {useDispatch} from 'react-redux';
import {setShow} from '../../redux/dataSlice';

export const MovieItem = ({id, title, poster_path}) => {
  const {colors} = useTheme();
  const styles = createStyles(colors);
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const goto = () => {
    dispatch(setShow(false));
    navigation.navigate(NAVIGATION.detail, {id});
  };
  return (
    <Pressable onPress={goto}>
      <ImageBackground
        source={{uri: `${imgURL}${poster_path}`}}
        style={styles.poster}
        imageStyle={styles.posterImage}>
        <LinearGradient
          colors={['transparent', '#000']}
          useAngle={true}
          angle={180}
          style={styles.titleContainer}>
          <Text style={styles.title}>{title}</Text>
        </LinearGradient>
      </ImageBackground>
    </Pressable>
  );
};
