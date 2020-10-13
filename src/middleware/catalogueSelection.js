import axios from 'axios';
import { FETCH_SELECTION, saveSelection } from 'src/actions/catalogueSelection';

const selections = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_SELECTION: {
      axios.get('http://3.91.26.197/projet-book-back/API/public/book/list/rating?limit=10')
        .then((response) => {
          const selectionToDispatch = saveSelection(response.data);
          store.dispatch(selectionToDispatch);
          console.log('catalogueSelection', response);
        })
        .catch((error) => console.log('catalogueSelection', error));
      break;
    }

    default:
      next(action);
  }
};

export default selections;
