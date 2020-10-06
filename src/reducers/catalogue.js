import { SAVE_CATALOGUE } from 'src/actions/catalogue';

const initialState = {
  loading: true,
  posts: [],
};

const catalogue = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_CATALOGUE:
      return {
        ...state,
        posts: action.catalogue,
        loading: false,
      };
    default:
      return state;
  }
};

export default catalogue;
