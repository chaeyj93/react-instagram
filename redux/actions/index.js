//fetch, save users
import firebase from "firebase";
import { USER_STATE_CHANGE } from "../constants/index";

export function fetchUser() {
  return (dispatch) => {
    firebase
      .firestore()
      .collection("user")
      .doc(firebase.auth().currentUser.uid)
      .get()
      .then((snapshot) => {
        if (snapshot.exists) {
          console.log(snapshot.data());
          dispatchEvent({
            type: USER_STATE_CHANGE,
            currentUser: snapshot.data(),
          });
        } else {
          console.log("snapshot does not exist");
        }
      });
  };
}
