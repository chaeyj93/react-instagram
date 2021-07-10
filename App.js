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
import RegisterScreen from "./components/auth/Register";
import LoginScreen from "./components/auth/Login";

const Stack = createStackNavigator(); // https://eso0609.tistory.com/88

if (firebase.apps.length === 0) {
  // 초기화 crash 방지 -- you check if already initialized
  firebase.initializeApp(firebaseConfig);
}

export class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Landing">
          {/* 이거대신에 createStackNavigator 할때 Home : Landing 해줘도 될듯? 나중에 해보자*/}
          <Stack.Screen
            name="Landing" //navigater.navigate('Landing')해서 오면 이리로 온다는 의미
            component={LandingScreen} //띄우는 컴포넌트는 이거!
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Register"
            component={RegisterScreen} //import 하는 이름과 맞춰야 함
            options={{ headerShown: true }}
          />
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{ headerShown: true }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default App;
