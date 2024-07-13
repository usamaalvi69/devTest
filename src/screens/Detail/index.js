import { FlatList, ScrollView, Text, View } from "react-native";
import React, { useEffect, useMemo, useState } from "react";

import { Btn, Loader, Separator } from "../../components";
import { createStyles } from "./styles";
import { useTheme } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovieDetails } from "../../redux/apiThunks";
import { dummyVideoUrl } from "../../helpers";

import { strings } from "../../localization";
import WebView from "react-native-webview";
import { MoviePoster } from "./MoviePoster";

const Detail = ({ navigation, route }) => {
  const {
    params: { id },
  } = route;

  const mov_details = useSelector((state) => state.api.detail);
  const loading = useSelector((state) => state.api.detail_oading);
  const [watch, setWatch] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const data = useMemo(() => mov_details, [mov_details]);
  const dispatch = useDispatch();
  const { colors } = useTheme();
  const styles = createStyles(colors);

  useEffect(() => {
    dispatch(fetchMovieDetails(id));
  }, [dispatch]);
  const playTrailer = () => setWatch(true);
  const handleLoadStart = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };

  const renderItem = ({ item, index }) => (
    <Btn
      key={item?.id}
      title={item?.name}
      auto
      style={[styles.genreBtns, { backgroundColor: colors.genre[index] }]}
    />
  );
  return (
    <View style={styles.container}>
      <Loader loading={loading} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <MoviePoster
          data={data}
          navigation={navigation}
          play={playTrailer}
          styles={styles}
          loading={isLoading}
        />
        <Text style={styles.genreTitle}>{strings.common.genres}</Text>
        <FlatList
          style={styles.genreList}
          data={data?.genres}
          numColumns={3}
          renderItem={renderItem}
          keyExtractor={(item) => item?.id.toString()}
        />

        <Separator style={styles.separator} />
        <View style={styles.overView}>
          <Text style={styles.head}>{strings.common.overview}</Text>
          <Text style={styles.body}>{data?.overview}</Text>
        </View>
      </ScrollView>
      {watch ? (
        <WebView
          source={{
            uri: dummyVideoUrl,
          }}
          onLoadStart={handleLoadStart}
        />
      ) : null}
    </View>
  );
};

export default Detail;
