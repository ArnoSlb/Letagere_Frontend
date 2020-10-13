import { SAVE_SELECTION } from 'src/actions/catalogueSelection';

const initialState = {
  catalogueSelection: [],
  loading: true,
};

const catalogueSelection = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_SELECTION:
      return {
        ...state,
        catalogueSelection: action.selection,
        loading: false,
      };
    default:
      return state;
  }
};

export default catalogueSelection;
