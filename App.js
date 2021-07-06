import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View } from "react-native";

import { NavigationConatiner } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { LandingScreen } from "./auth/Landing";

const Stack = createStackNavigator(); // https://eso0609.tistory.com/88

export default function App() {
  return (
    <NavigationConatiner>
      <Stack.Navigator initialRoutename="Landing">
        <Stack.Screen
          name="Landing"
          component={LandingScreen}
          options={{ headerShown: false }}
        ></Stack.Screen>
      </Stack.Navigator>
    </NavigationConatiner>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
