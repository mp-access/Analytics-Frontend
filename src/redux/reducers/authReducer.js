import { Actions } from '../actions';

const initialState = {
    isAuthenticated: false,
    keycloak: null,
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case Actions.INIT_AUTH:
            const auth = action.payload;
            return {
                isAuthenticated: auth.isAuthenticated,
                keycloak: auth.keycloak,
            };
        default:
            return state;
    }
};

export default authReducer;