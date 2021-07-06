import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";

import * as firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBIzVZrEjSGQF6wVqgmMvdlrcWbgAh-lwA",
  authDomain: "instagram-dev-8e947.firebaseapp.com",
  projectId: "instagram-dev-8e947",
  storageBucket: "instagram-dev-8e947.appspot.com",
  messagingSenderId: "1074539383145",
  appId: "1:1074539383145:web:cbd0d34670949223cb15f8",
  measurementId: "G-Y9QQKTVM03",
};

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import LandingScreen from "./components/auth/Landing";

const Stack = createStackNavigator(); // https://eso0609.tistory.com/88

// if (firebase.apps.length === 0) {
//   // crash 방지
//   firebase.initializeApp(firebase);
// }

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Landing">
        <Stack.Screen
          name="Landing"
          component={LandingScreen}
          options={{ headerShown: false }}
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
});
