import { combineReducers } from "redux";
import metricsReducer from './metricsReducer';
import coursesReducer from './coursesReducer';


export default combineReducers({
    courses: coursesReducer,
    metrics: metricsReducer
});
