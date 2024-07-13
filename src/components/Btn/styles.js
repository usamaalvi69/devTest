import { StyleSheet } from "react-native";
export const createStyles = (colors) =>
  StyleSheet.create({
    btn: {
      height: 50,
      width: 243,
      marginBottom: 20,
      backgroundColor: "#61C3F2",
      borderRadius: 10,
      alignItems: "center",
      justifyContent: "center",
    },
    borderBtn: {
      backgroundColor: "transparent",
      borderWidth: 1,
      borderColor: "#61C3F2",
      flexDirection: "row",
    },
    btnLabel: { color: "#fff", marginLeft: 5, fontFamily: "Poppins-Medium" },
    auto: {
      height: undefined,
      width: undefined,
      padding: 5,
    },
  });
