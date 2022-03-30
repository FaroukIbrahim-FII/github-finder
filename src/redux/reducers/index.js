import { combineReducers } from "redux";
import userReducer from "./userReducer";
import usersReducer from "./usersReducer";
import reposReducer from "./reposReducer";

const rootReducer = combineReducers({
  usersList: usersReducer,
  userDetail: userReducer,
  userRepos: reposReducer,
});
export default rootReducer;
