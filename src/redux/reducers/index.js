import { combineReducers } from "redux";
import addReducer from "./add";


export default combineReducers({
    addStore: addReducer
});
