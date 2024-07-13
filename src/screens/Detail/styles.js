import { StyleSheet } from "react-native";
import { screenHeight } from "../../constant/dimensions";

export const createStyles = (colors) =>
  StyleSheet.create({
    container: { flex: 1 },
    poster: { height: screenHeight / 2, width: "100%" },
    date: {
      color: colors.white,
      fontSize: 16,
      fontFamily: "Poppins-Medium",
      marginBottom: 10,
    },
    title: {
      fontSize: 24,
      color: colors.white,
      fontFamily: "Poppins-Black",
      marginBottom: 10,
    },
    genreList: { marginLeft: 20 },
    genreTitle: { marginTop: 20, marginLeft: 20, marginBottom: 12, fontFamily: "Poppins-Medium", fontSize: 16 },
    logo: { height: 30, width: 102 },
    lower: {
      flex: 0.9,
      alignItems: "center",
      justifyContent: "flex-end",
      // backgroundColor: 'orange',
    },
    header: { color: colors.black },
    genreBtns: {
      height: 30,
      width: 65,
      marginBottom: 8,
      borderRadius: 15,
      marginHorizontal: 5,
    },
    genreContainer: {
      flexDirection: "row",
      flexWrap: "wrap",
      marginHorizontal: 20,
      //   justifyContent: 'center',
    },
    separator: { marginTop: 15, width: "85%" },
    overView: {
      width: "90%",
      alignSelf: "center",
      marginBottom: 100,
    },
    head: { marginBottom: 10, fontFamily: "Poppins-Medium", fontSize: 16 },
    body: {
      fontSize: 12,
      color: colors.subText,
      lineHeight: 20,
      fontFamily: "Poppins-Regular",
    },
  });
