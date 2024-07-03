import { View, Text, TextInput, StyleSheet } from "react-native";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import Header from "./header";
import { FontAwesome } from "@expo/vector-icons";

const Form = () => {
  interface FormData {
    username: string;
    password: string;
  }
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.fields}>
        <View style={styles.inputContainer}>
          <FontAwesome
            name="user"
            size={22}
            color="#8C848A"
            style={styles.icon}
          />
          <Controller
            name="username"
            control={control}
            rules={{ required: true, minLength: 8 }}
            render={({ field: { onChange, onBlur, value } }) => {
              return (
                <TextInput
                  placeholder="Enter Username"
                  onChangeText={onChange}
                  onBlur={onBlur}
                  value={value}
                  style={styles.input}
                />
              );
            }}
          />
        </View>
        {errors.username && <Text>This Field is required</Text>}

        <View style={styles.inputContainer}>
          <FontAwesome
            name="lock"
            size={22}
            color="#8C848A"
            style={styles.icon}
          />
          <Controller
            name="password"
            control={control}
            rules={{ required: true, minLength: 2 }}
            render={({ field: { onChange, onBlur, value } }) => {
              return (
                <TextInput
                  placeholder="Enter Password"
                  onChangeText={onChange}
                  onBlur={onBlur}
                  value={value}
                  secureTextEntry
                  style={styles.input}
                />
              );
            }}
          />
        </View>
        {errors.username && <Text>This field requires 8 characters</Text>}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    gap: 50,
  },
  fields: {
    borderColor: "#000",
    gap: 10,
  },
  input: {
    backgroundColor: "#B2AEAD",
    borderRadius: 5,
    // color: "#000",
    padding: 6,
    width: 300,
    fontSize: 18,
    textDecorationColor: "gray",
    paddingLeft: 40,
  },
  inputContainer: {
    flexDirection: "row",
    // alignItems: "center",
    borderColor: "gray",
    // borderWidth: 1,
    // borderRadius: 10,
    // marginBottom: 20,
    // paddingHorizontal: 10,
    // backgroundColor: "#B2AEAD",
  },
  icon: {
    position: "absolute",
    justifyContent: "center",
    backgroundColor: "#b2aead",
    padding: 6,
    left: 3,
    zIndex: 1,
    alignItems: "center",
    marginTop: 2,
  },
});
export default Form;
