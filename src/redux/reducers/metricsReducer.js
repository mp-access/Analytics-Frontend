import { Actions } from '../actions';

const initialState = {
    distributions: [],
    maxScore: 0,
    gradedSubmissions: 0,
    totalSubmissions: 0,
    isLoading: false
};

const metricsReducer = (state = initialState, action) => {

    switch (action.type) {
        case Actions.FETCHING_DISTRIBUTION:
            return {
                ...initialState,
                isLoading: true
            };

        case Actions.FETCH_DISTRIBUTION_SUCCESS:
            const dist = action.payload;
            const distributions = Object.keys(dist.distributions).map(key => {
                    return {
                        id: key,
                        label: key,
                        value: dist.distributions[key],
                    };
                },
            );

            return {
                ...state,
                distributions,
                isLoading: false
            };
        default:
            return state;
    }
    return state;
};

export default metricsReducer;
