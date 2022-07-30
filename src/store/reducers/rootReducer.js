import { combineReducers } from "redux";
import authReducer from "./authReducer";
import classReducer from "./classReducer";
import localStateReducer from "./localStateReducer";

const rootReducer = combineReducers({
    auth: authReducer,
    joinClass: classReducer,
    local: localStateReducer
});

export default rootReducer;