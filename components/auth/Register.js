import React, { Component } from "react";
import { View, Button, TextInput } from "react-native";

import firebase from "firebase";

export class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      name: "",
    };

    this.onSignUp = this.onSignUp.bind(this); //??? 빼도 된다고??? this 가 뭔지 알려주는 거.
  }

  onSignUp() {
    const { email, password, name } = this.state;
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((result) => {
        firebase
          .firestore()
          .collection("users") //collectionPath
          .doc(firebase.auth().currentUser.uid) //Get a DocumentReference for the document within the collection at the specified path.
          .set({ name, email }); //doc 에 보낼 값들
        console.log("register result : " + result);
      }) //firebase 서버에서 response 오면 콜백됨
      .catch((error) => console.log("register error : " + error));
  }

  render() {
    return (
      <View>
        <TextInput
          placeholder="name"
          onChangeText={(name) => this.setState({ name: name })}
        />
        <TextInput
          placeholder="email"
          onChangeText={(email) => this.setState({ email })}
        />
        <TextInput
          placeholder="password"
          secureTextEntry={true}
          onChangeText={(password) => this.setState({ password })}
        />
        <Button onPress={() => this.onSignUp()} title="Sign Up!" />
      </View>
    );
  }
}

export default Register;
