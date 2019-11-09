import { ADD } from "../actions";

const initialState = {
  value: 0
};

const addReducer = (state = initialState, action) => {

  const { value } = state;
  switch (action.type) {
    case ADD:
      return {
        ...state,
        value: value + action.payload
      };
    default:
      return state;
  }
  return state;
};

export default addReducer;