import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View } from "react-native";
import { NavigationConatiner } from "@react-navigation/native";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationConatiner>{/* Rest of your app code */}</NavigationConatiner>
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
