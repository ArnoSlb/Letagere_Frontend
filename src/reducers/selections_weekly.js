import { SAVE_HEART } from 'src/actions/selections_weekly';

const initialState = {
  heart: [],
  loading: true,
};

const selectionsWeekly = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_HEART:
      return {
        ...state,
        heart: action.heart,
        loading: false,
      };
    default:
      return state;
  }
};

export default selectionsWeekly;
