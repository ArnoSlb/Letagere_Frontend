import { SAVE_BOOK } from 'src/actions/livre';

const initialState = {
  livre: [],
  loading: true,
};

const livre = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_BOOK:
      return {
        ...state,
        livre: action.book,
        loading: false,
      };
    default:
      return state;
  }
};

export default livre;
