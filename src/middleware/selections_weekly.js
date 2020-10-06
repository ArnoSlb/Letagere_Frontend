import axios from 'axios';
import { FETCH_HEART, saveHeart } from 'src/actions/selections_weekly';

const selections = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_HEART: {
      axios.get('http://3.91.26.197/projet-book-back/API/public/book/list/rating?limit=3')
        .then((response) => {
          const heartToDispatch = saveHeart(response.data);
          store.dispatch(heartToDispatch);
          // console.log('heart', response);
        })
        .catch((error) => console.log('catalogue', error));
      break;
    }

    default:
      next(action);
  }
};

export default selections;
