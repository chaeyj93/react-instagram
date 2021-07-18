import { combineReducers } from "redux";
import { user } from "./user";

//https://usonkrap.github.io/2018/12/15/React-Redux-Tutorial-for-Beginners.html

const Reducers = combineReducers({
  userState: user,
});

export default Reducers;
