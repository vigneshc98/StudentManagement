import { combineReducers } from "redux";
import {reducer} from "./reducer/reducer";
// import { adminReducer } from "./reducer/adminReducer";

const rootReducer = combineReducers({redu:reducer});

export default rootReducer;