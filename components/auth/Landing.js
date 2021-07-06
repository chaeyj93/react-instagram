import React from "react";
import { Text, View, Button } from "react-native";

export default function Landing({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: "center" }}>
      <Button
        title="Register"
        onPress={() => navigation.navigate("Register")} //navigation 에서 제일 중요하다는 부분
      ></Button>
      <Button
        title="Login"
        onPress={() => navigation.navigate("Login")}
      ></Button>
    </View>
  );
}
