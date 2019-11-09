const FETCH_DISTRIBUTION_SUCCESS = 'FETCH_DISTRIBUTION_SUCCESS';
const FETCHING_DISTRIBUTION = 'FETCHING_DISTRIBUTION';

const FETCHING_COURSES = 'FETCHING_COURSES';
const FETCH_COURSES_SUCCESS = 'FETCH_COURSES_SUCCESS';


const Actions = {
    FETCHING_DISTRIBUTION,
    FETCH_DISTRIBUTION_SUCCESS,
    FETCHING_COURSES,
    FETCH_COURSES_SUCCESS
};

const fetchDistribution = () => {
    return async (dispatch) => {
        dispatch({
            type: Actions.FETCHING_DISTRIBUTION,
        });

        const distribution = await fetch('/metrics/submissions/exercises/57c8fe28-c4ed-39a2-a79b-a65ddda1b7b7')
            .then(response => response.json());

        dispatch({
            type: Actions.FETCH_DISTRIBUTION_SUCCESS,
            payload: distribution,
        });
    };
};

const fetchCourses = () => {
    return async (dispatch) => {
        dispatch({
            type: Actions.FETCHING_COURSES,
        });

        const courses = await fetch('/api/courses')
            .then(response => response.json());

        dispatch({
            type: Actions.FETCH_COURSES_SUCCESS,
            payload: courses,
        });
    };

};

export { Actions, fetchCourses, fetchDistribution };