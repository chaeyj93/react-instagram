import { React } from "react";
import { Text, View, Button } from "react-native";

export default function Landing({ navigationProp }) {
  return (
    <View style={{ flex: 1, justifyContent: "center" }}>
      <Button
        title="Register"
        onPress={() => navigationProp.navigate("Register")} //navigation 에서 제일 중요하다는 부분
      ></Button>
      <Button
        title="Login"
        onPress={() => navigationProp.navigate("Login")}
      ></Button>
    </View>
  );
}
