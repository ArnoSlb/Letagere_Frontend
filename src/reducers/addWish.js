import { SAVE_ADD_WISH } from 'src/actions/addWish';

const initialState = {
  loading: true,
  addWish: [],
};

const addWish = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_ADD_WISH:
      return {
        ...state,
        addWish: action.addWish,
        loading: false,
      };
    default:
      return state;
  }
};

export default addWish;
