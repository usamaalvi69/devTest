import {FlatList, View} from 'react-native';
import React, {useCallback, useEffect, useMemo} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {Loader, SearchHeader} from '../../components';

import {fetchGenres, fetchMovies, fetchTrending} from '../../redux/apiThunks';

import {createStyles} from './styles';
import {useTheme} from '@react-navigation/native';

import {NAVIGATION} from '../../constant/navigation';
import {MovieItem} from './MovieItem';
import { strings } from '../../localization';

const Upcoming = ({navigation}) => {
  const movies = useSelector(state => state.api.moviesData);
  const loading = useSelector(state => state.api.moviesLoading);
  const data = useMemo(() => movies, [movies]);
  const dispatch = useDispatch();
  const {colors} = useTheme();
  const styles = createStyles(colors);

  useEffect(() => {
    dispatch(fetchMovies());
    dispatch(fetchGenres());
    dispatch(fetchTrending());
  }, [dispatch]);

  const renderItem = useCallback(({item}) => {
    return <MovieItem {...item} />;
  }, []);

  return (
    <View style={styles.container}>
      <Loader loading={loading} />
      <SearchHeader
        onSearch={() => navigation.navigate(NAVIGATION.search)}
        label={strings.common.watch}
      />
      <FlatList
        data={data}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item, index) => item?.id?.toString()}
      />
    </View>
  );
};

export default Upcoming;
