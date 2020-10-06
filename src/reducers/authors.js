import { SAVE_AUTHORS } from 'src/actions/authors';

const initialState = {
  authors: [],
  loading: true,
};

const authors = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_AUTHORS:
      return {
        ...state,
        authors: action.authors,
        loading: false,
      };
    default:
      return state;
  }
};

export default authors;
