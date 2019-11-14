import { combineReducers } from "redux";
import metricsReducer from './metricsReducer';
import coursesReducer from './coursesReducer';
import authReducer from './authReducer';


export default combineReducers({
    auth: authReducer,
    courses: coursesReducer,
    metrics: metricsReducer
});
