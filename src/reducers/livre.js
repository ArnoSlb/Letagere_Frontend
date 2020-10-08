import { SAVE_BOOK } from 'src/actions/livre';
import { SAVE_BOOK_AUTHOR } from 'src/actions/livreAuteur';

const initialState = {
  livre: [],
  loading: true,
  livreAuteur: [],
  loadingAuteur: true,
};

const livre = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_BOOK:
      return {
        ...state,
        livre: action.book,
        loading: false,
      };
    case SAVE_BOOK_AUTHOR:
      return {
        ...state,
        livreAuteur: action.bookAuthor,
        loadingAuteur: false,
      };
    default:
      return state;
  }
};

export default livre;
