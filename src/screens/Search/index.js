import {
  FlatList,
  Image,
  ImageBackground,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {fetchSearchResults} from '../../redux/apiThunks';
import {setSearch} from '../../redux/apiSlice';

import {createStyles} from './styles';
import {useTheme} from '@react-navigation/native';
import Icon, {Icons} from '../../components/Icons/Icons';

import {matchGenre} from '../../helpers';
import {MoviesListing} from './MoviesListing';
import {imgURL} from '../../networking/config';
import {NAVIGATION} from '../../constant/navigation';
import {Loader} from '../../components';
import {setShow} from '../../redux/dataSlice';
import { strings } from '../../localization';

const Search = ({navigation}) => {
  const [searchText, setSearchText] = useState('');
  const searchResults = useSelector(state => state.api.searchResults);
  const searchLoad = useSelector(state => state.api.searchLoading);
  const trending = useSelector(state => state.api.trending);
  const trendLoad = useSelector(state => state.api.trend_load);
  const genres = useSelector(state => state.api.genres);
  const dispatch = useDispatch();
  const inputRef = useRef();
  const {colors} = useTheme();
  const styles = createStyles(colors);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      dispatch(fetchSearchResults(searchText));
    }, 1000);
    return () => clearTimeout(timeoutId);
  }, [searchText, dispatch]);

  const goToDetail = item => {
    dispatch(setShow(false));
    navigation.navigate(NAVIGATION.detail, {id: item?.id});
  };
  const renderTrends = ({item}) => (
    <TouchableOpacity
      style={{marginHorizontal: 8}}
      onPress={() => goToDetail(item)}>
      <ImageBackground
        source={{uri: `${imgURL}${item?.poster_path}`}}
        style={styles.poster}
        imageStyle={styles.posterImage}>
        <View style={[styles.poster, styles.shadow]}>
          <Text style={styles.genre}>
            {matchGenre(genres, item?.genre_ids)}
          </Text>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
  const renderSearchResult = ({item}) => (
    <TouchableOpacity
      onPress={() => goToDetail(item)}
      style={styles.itemContainer}>
      <Image
        source={{uri: `${imgURL}${item?.poster_path}`}}
        style={styles.poster2}
      />
      <View style={styles.movieTitle}>
        <Text numberOfLines={1} style={styles.mTitle}>
          {item?.title}
        </Text>
        <Text style={styles.subTitle}>
          {matchGenre(genres, item?.genre_ids)}
        </Text>
      </View>
      <Icon
        type={Icons.MaterialCommunityIcons}
        name="dots-horizontal"
        size={24}
        color={colors.global}
      />
    </TouchableOpacity>
  );
  return (
    <View style={[styles.container]}>
      <Loader loading={searchLoad || trendLoad} />
      <View style={styles.inputContainer}>
        <View style={styles.leftInput}>
          <Icon
            type={Icons.Feather}
            name="search"
            size={24}
            color={colors.primary}
          />
          <TextInput
            ref={inputRef}
            style={styles.searchInput}
            value={searchText}
            onChangeText={setSearchText}
            placeholderTextColor={colors.placeholder}
            placeholder={strings.common.placeHolder}
          />
        </View>
        <Icon
          onPress={() => navigation.goBack()}
          type={Icons.EvilIcons}
          name="close"
          size={28}
          color={colors.primary}
        />
      </View>

      <MoviesListing
        searchResults={searchResults}
        searchText={searchText}
        trending={trending}
        renderSearchResult={renderSearchResult}
        renderTrends={renderTrends}
        styles={styles}
      />
    </View>
  );
};

export default Search;
