import { SAVE_CATALOGUE, SAVE_ITEMS } from 'src/actions/catalogue';

const initialState = {
  catalogue: [],
  loading: true,
  items: '',
};

const catalogueBddTest = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_CATALOGUE:
      return {
        ...state,
        catalogue: action.catalogue,
        loading: false,
      };
    case SAVE_ITEMS:
      return {
        ...state,
        items: action.items,
        loading: false,
      };
    default:
      return state;
  }
};

export default catalogueBddTest;
