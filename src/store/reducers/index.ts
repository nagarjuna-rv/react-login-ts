import { combineReducers } from "redux";
import loginReducer from "./loginReducer";

const reducers = combineReducers({
  login: loginReducer,
});

export default reducers;

// initializing root state type similar to our main reducer
export type RootState = ReturnType<typeof reducers>;
