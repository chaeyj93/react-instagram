import React, { Component } from "react";
import { View, Button, TextInput } from "react-native";

import firebase from "firebase";

export class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };

    this.onSignIn = this.onSignIn.bind(this); //??? 빼도 된다고??? this 가 뭔지 알려주는 거.
  }

  onSignIn() {
    const { email, password } = this.state;
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((result) => console.log("login result : " + result)) //firebase 서버에서 response 오면 콜백됨
      .catch((error) => console.log("login error : " + error));
  }

  render() {
    return (
      <View>
        <TextInput
          placeholder="email"
          onChangeText={(email) => this.setState({ email })}
        />
        <TextInput
          placeholder="password"
          secureTextEntry={true}
          onChangeText={(password) => this.setState({ password })}
        />
        <Button onPress={() => this.onSignIn()} title="Sign In!" />
      </View>
    );
  }
}

export default Login;
