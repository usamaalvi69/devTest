import { ImageBackground, Text, View } from "react-native";
import React from "react";
import { imgURL } from "../../networking/config";
import { formatDate } from "../../helpers";
import { strings } from "../../localization";
import LinearGradient from "react-native-linear-gradient";
import { Btn, Header } from "../../components";

export const MoviePoster = ({ data, navigation, loading, play, styles }) => {
  const goBack = () => navigation.goBack();
  return (
    <ImageBackground
      source={{ uri: `${imgURL}${data?.poster_path}` }}
      style={styles.poster}
    >
      <LinearGradient
        colors={["transparent", "#000"]}
        useAngle={true}
        angle={180}
        style={styles.poster}
      >
        <Header onPress={goBack} title={strings.common.watch} />
        <View style={styles.lower}>
          <Text style={styles.title}>{data?.title}</Text>
          <Text style={styles.date}>
            {strings.common.theatres}, {formatDate(data?.release_date)}
          </Text>

          <Btn title={strings.common.getTickets} />
          <Btn
            onPress={play}
            title={
              loading ? strings.common.loading : strings.common.watchTrailer
            }
            border
          />
        </View>
      </LinearGradient>
    </ImageBackground>
  );
};
