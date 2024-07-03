import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Messages from "../components/messages";
import Invoice from "../components/invoice";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const Main = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabelStyle: {
          fontWeight: "bold",
          fontSize: 20,
        },
        headerShown: false,
        tabBarActiveTintColor: "#cb19a2",
        tabBarInactiveTintColor: "gray",
        tabBarLabelPosition: "below-icon",
        tabBarStyle: {
          height: 70,
        },
      }}
    >
      <Tab.Screen
        name="Messages"
        component={Messages}
        options={{
          tabBarIcon: () => (
            <MaterialCommunityIcons
              name="message-text-outline"
              size={30}
              color="#cb19a2"
              style={styles.icon}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Invoice"
        component={Invoice}
        options={{
          tabBarIcon: () => (
            <FontAwesome5 name="file-invoice" size={24} color="#cb19a2" />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: "center",
  },
  icon: {},
});
export default Main;
