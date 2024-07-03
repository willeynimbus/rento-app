import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Login from "./screens/login";
import Main from "./screens/main";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerTitleStyle: {
            fontWeight: "bold",
            fontSize: 50,
          },
          headerLeft: undefined,
        }}
      >
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Main"
          component={Main}
          options={({ navigation }) => ({
            title: "Rento",
            headerBackVisible: false,
            headerRight: () => (
              <TouchableOpacity
                style={styles.back}
                onPress={() => navigation.goBack()}
              >
                <Text style={styles.backText}>Back</Text>
              </TouchableOpacity>
            ),
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  back: {
    backgroundColor: "#cb19a2",
    borderRadius: 30,
    padding: 6,
    paddingHorizontal: 20,
    marginRight: 10,
  },
  backText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 20,
  },
});
