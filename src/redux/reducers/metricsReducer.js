import { Actions } from '../actions';

const initialState = {
    distributions: [],
    maxScore: 0,
    gradedSubmissions: 0,
    totalSubmissions: 0,
    isLoading: false,
};

const metricsReducer = (state = initialState, action) => {

    switch (action.type) {
        case Actions.FETCHING_DISTRIBUTION:
            return {
                ...initialState,
                isLoading: true,
            };

        case Actions.FETCH_DISTRIBUTION_SUCCESS:
            const dist = action.payload;
            const distributions = Object.keys(dist.distributions).map(key => {
                    return {
                        id: key,
                        label: `# scored ${key} points`,
                        value: dist.distributions[key],
                    };
                },
            );

            return {
                ...state,
                ...dist,
                distributions,
                isLoading: false,
            };
        default:
            return state;
    }
};

export default metricsReducer;

/**
 * Example structure
 *
 const demoData = [
 {
        'id': 'stylus',
        'label': 'stylus',
        'value': 389,
    },
 {
        'id': 'scala',
        'label': 'scala',
        'value': 82,
    },
 {
        'id': 'java',
        'label': 'java',
        'value': 389,
    },
 {
        'id': 'python',
        'label': 'python',
        'value': 444,
    },
 {
        'id': 'rust',
        'label': 'rust',
        'value': 125,
    },
 ];
 */