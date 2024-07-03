import { View, Text, Button, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import Form from "../components/form";

const Login = ({ navigation }: { navigation: any }) => {
  return (
    <View style={styles.container}>
      <Form />
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Main")}
      >
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
  },
  button: {
    backgroundColor: "#cb19a2",
    padding: 6,
    width: 300,
    alignItems: "center",
    borderRadius: 5,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});

export default Login;
