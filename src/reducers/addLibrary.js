import { SAVE_ADD } from 'src/actions/add';

const initialState = {
  loading: true,
  add: [],
};

const add = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_ADD:
      return {
        ...state,
        add: action.add,
        loading: false,
      };
    default:
      return state;
  }
};

export default add;
