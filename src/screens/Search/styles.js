import { StyleSheet } from "react-native";
import { screenWidth } from "../../constant/dimensions";
export const createStyles = (colors) =>
  StyleSheet.create({
    container: {
      width: "100%",
      backgroundColor: colors.white,
    },
    inputContainer: {
      height: 52,
      width: "90%",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      borderRadius: 30,
      backgroundColor: colors.bg,
      alignSelf: "center",
      paddingHorizontal: 15,
    },
    movieTitle: { width: "40%", marginLeft: 5 },
    shadow: { backgroundColor: "rgba(0,0,0,0.3)", justifyContent: "flex-end" },
    genre: {
      color: colors.white,
      fontSize: 16,
      fontFamily: "Poppins-Medium",
      marginBottom: 20,
      marginHorizontal: 10,
    },
    itemContainer: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      // marginHorizontal: 15,
      //   marginBottom: 10,
      // backgroundColor: '#DBDBDF',
    },
    listView: {
      width: "100%",
      backgroundColor: colors.bg,
      alignItems: "center",
      marginTop: 20,
    },
    mTitle: { fontFamily: "Poppins-Medium", fontSize: 14, marginBottom: 5 },
    subTitle: {
      color: colors.subText,
      fontSize: 12,
      fontFamily: "Poppins-Medium",
    },
    placeHolder: { marginLeft: 10 },
    leftInput: { flexDirection: "row", alignItems: "center" },
    searchInput: {
      fontSize: 16,
      marginLeft: 10,
    },
    dropdownList: {
      //   width: screenWidth,
      //   backgroundColor: colors.bg,
      //   alignSelf: 'center',
      marginTop: 20,
    },
    poster: {
      width: 160,
      height: 112,
      borderRadius: 10,
      marginBottom: 20,
    },
    poster2: {
      width: 140,
      height: 102,
      borderRadius: 10,
      marginBottom: 20,
    },
    posterImage: {
      borderRadius: 10,
    },
    flag: {
      height: 22,
      width: 22,
      borderRadius: 2,
    },
    searchResult: {
      padding: 5,
      borderBottomWidth: 1,
    },
    searchResultItem: {
      padding: 10,
      borderBottomWidth: 1,
      borderBottomColor: "#ddd",
    },
    searchResultText: {
      fontSize: 16,
      fontWeight: "bold",
    },
    searchResultInfo: {
      marginTop: 5,
    },
    infoText: {
      fontSize: 14,
    },
    currencyInfo: {
      flexDirection: "row",
      alignItems: "center",
      marginVertical: 5,
    },
    currencyText: {
      marginLeft: 5,
    },
  });
