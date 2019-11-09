export const ADD = 'ADD';

const addOne = () => {
    return (dispatch) => {
        console.log('ADSFASF');
        dispatch({
            type: ADD,
            payload: 1,
        });
    };
};

export { addOne };