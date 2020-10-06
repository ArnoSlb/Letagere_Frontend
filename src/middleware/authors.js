import axios from 'axios';
import { FETCH_AUTHORS, saveAuthors } from 'src/actions/authors';

const authors = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_AUTHORS: {
      axios.get('http://3.91.26.197/projet-book-back/API/public/author/list?limit=10')
        .then((response) => {
          const authorsToDispatch = saveAuthors(response.data.authors);
          store.dispatch(authorsToDispatch);
          // console.log('authors', response);
        })
        .catch((error) => console.log('authors', error));
      break;
    }

    default:
      next(action);
  }
};

// countItems

export default authors;
