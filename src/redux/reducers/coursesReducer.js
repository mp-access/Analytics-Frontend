import { Actions } from '../actions';

const initialState = {
    courses: undefined,
    isLoading: false,
};

const coursesReducer = (state = initialState, action) => {

    switch (action.type) {
        case Actions.FETCHING_COURSES:
            return {
                courses: [],
                isLoading: true,
            };

        case Actions.FETCH_COURSES_SUCCESS:

            return {
                courses: action.payload,
                isLoading: false,
            };
        default:
            return state;
    }
};

export default coursesReducer;
