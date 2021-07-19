import React, { Component } from "react";
import { View, Text } from "react-native";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchUser } from "../redux/actions/index.js";

import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import FeedScreen from "./main/Feed";
import AddScreen from "./main/Add";
import ProfileScreen from "./main/Profile";
const Tab = createMaterialBottomTabNavigator();

const EmptyScreen = () => {
  return null;
};

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
      <Tab.Navigator initialRouteName="Feed">
        <Tab.Screen
          name="Feed"
          labeled={false}
          component={FeedScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="home" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="AddContainer"
          labeled={false}
          component={AddScreen}
          listeners={({ navigation }) => ({
            tabPress: (event) => {
              event.preventDefault();
              navigation.navigate("Add");
            },
          })}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="plus-box" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          labeled={false}
          component={ProfileScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="account-circle"
                color={color}
                size={26}
              />
            ),
          }}
        />
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
