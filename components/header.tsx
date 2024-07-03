import { View, Text, StyleSheet } from "react-native";
import React from "react";

const Header = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Rento</Text>
      <Text style={styles.subheader}>All-in-1 Rent App</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    textAlign: "center",
    alignItems: "center",
    // fontFamily: require("@expo-google-fonts/balsamiq-sans"),
  },
  header: {
    fontSize: 90,
    fontWeight: "700",
    color: "#000",
    fontStyle: "italic",
    // fontFamily: "PlaywriteNZ",
  },
  subheader: {
    color: "gray",
    fontSize: 18,
    textAlign: "center",
  },
});

export default Header;
