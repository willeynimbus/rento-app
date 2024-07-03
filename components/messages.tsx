import {
  View,
  Text,
  Image,
  StyleSheet,
  Button,
  TouchableOpacity,
} from "react-native";
import React from "react";

const Messages = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/image/messages.png")}
        style={styles.image}
      />
      <Text style={styles.text}>Welcome Tenants!</Text>
      <View style={styles.buttton}>
        <TouchableOpacity>
          <Text style={styles.button1}>John</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.button1}>Von</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.button1}>Cena</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    textAlign: "left",
  },
  image: {
    alignItems: "center",
    width: 410,
    height: 320,
    resizeMode: "cover",
    justifyContent: "center",
    // marginHorizontal: 550,
  },
  text: {
    fontWeight: "bold",
    color: "#000",
    fontSize: 25,
    left: 20,
  },
  buttton: {
    gap: 5,
  },
  button1: {
    backgroundColor: "#fff",
    marginHorizontal: 15,
    marginTop: 20,
    fontSize: 30,
    fontWeight: "bold",
    padding: 10,
    paddingLeft: 20,
    borderRadius: 10,
  },
});

export default Messages;
