import AuthenticationService from '../../auth/Auth';

const FETCH_DISTRIBUTION_SUCCESS = 'FETCH_DISTRIBUTION_SUCCESS';
const FETCHING_DISTRIBUTION = 'FETCHING_DISTRIBUTION';

const FETCHING_COURSES = 'FETCHING_COURSES';
const FETCH_COURSES_SUCCESS = 'FETCH_COURSES_SUCCESS';

const INIT_AUTH = 'INIT_AUTH';


const Actions = {
    INIT_AUTH,
    FETCHING_DISTRIBUTION,
    FETCH_DISTRIBUTION_SUCCESS,
    FETCHING_COURSES,
    FETCH_COURSES_SUCCESS,
};

const initAuth = () => {
    return async (dispatch) => {
        AuthenticationService.initializeKeycloak((keycloak) => {
            dispatch({
                type: Actions.INIT_AUTH,
                payload: keycloak,
            });
        });
    };
};

const fetchDistribution = (exerciseId) => {
    return async (dispatch) => {
        dispatch({
            type: Actions.FETCHING_DISTRIBUTION,
        });

        const distribution = await fetch('/metrics/submissions/exercises/' + exerciseId)
            .then(response => response.json());

        dispatch({
            type: Actions.FETCH_DISTRIBUTION_SUCCESS,
            payload: distribution,
        });
    };
};

const fetchCourses = () => {
    return async (dispatch, getState) => {
        const { keycloak } = getState().auth;

        dispatch({
            type: Actions.FETCHING_COURSES,
        });

        const headers = new Headers();
        headers.append('Authorization', 'Bearer ' + keycloak.token);
        const courses = await fetch('/api/courses', {
            headers: headers,
        }).then(response => response.json());

        dispatch({
            type: Actions.FETCH_COURSES_SUCCESS,
            payload: courses,
        });
    };

};

export { Actions, initAuth, fetchCourses, fetchDistribution };