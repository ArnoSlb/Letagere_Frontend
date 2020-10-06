import { SAVE_CATEGORIES } from 'src/actions/categories';

const initialState = {
  categories: [],
  loading: true,
};

const categories = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_CATEGORIES:
      return {
        ...state,
        categories: action.categories,
        loading: false,
      };
    default:
      return state;
  }
};

export default categories;
