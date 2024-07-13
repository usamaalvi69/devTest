import React from 'react';
import {View, FlatList, Dimensions, StyleSheet} from 'react-native';
import {screenHeight} from '../../constant/dimensions';

export const MoviesListing = ({
  searchResults,
  searchText,
  trending,
  renderSearchResult,
  renderTrends,
  styles,
}) => {
  const isSearchActive = searchResults.length > 1 && searchText?.length > 1;

  return (
    <View style={styles.listView}>
      {isSearchActive ? (
        <FlatList
          data={searchResults}
          renderItem={renderSearchResult}
          showsVerticalScrollIndicator={false}
          ListFooterComponent={<View style={{height: screenHeight / 4}} />}
          keyExtractor={item => item.id.toString()}
          style={styles.dropdownList}
          key="searchList"
        />
      ) : (
        <FlatList
          data={trending}
          renderItem={renderTrends}
          showsVerticalScrollIndicator={false}
          numColumns={2}
          ListFooterComponent={<View style={{height: screenHeight / 4}} />}
          keyExtractor={item => item.id.toString()}
          style={styles.dropdownList}
          key="trendingList"
        />
      )}
    </View>
  );
};
