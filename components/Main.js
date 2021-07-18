import React, { Component } from "react";
import { View, Text } from "react-native";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchUser } from "../redux/actions/index.js";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import FeedScreen from "./main/Feed";
const Tab = createBottomTabNavigator();

export class Main extends Component {
  componentDidMount() {
    this.props.fetchUser;
  }
  render() {
    // const { currentUser } = this.props;
    // console.log(currentUser.data());
    // if (currentUser == undefined) {
    //   return <View></View>;
    // }
    return (
      // <View style={{ flex: 1, justifyContent: "center" }}>
      //   <Text>User is logged in</Text>
      // </View>
      <Tab.Navigator>
        <Tab.Screen name="Feed" component={FeedScreen} />
      </Tab.Navigator>
    );
  }
}

const mapStateToProps = (store) => ({
  currentUser: store.userState.currentUser,
});

//bind components 를 하기 위해
const mapDispatchProps = (dispatch) =>
  bindActionCreators({ fetchUser }, dispatch);

export default connect(mapStateToProps, mapDispatchProps)(Main);
