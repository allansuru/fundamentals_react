import { combineReducers } from "redux";
import postReducer from "./postsReducers";
import userReducer from "./usersReducers";

export default combineReducers({
  posts: postReducer,
  users: userReducer
});
