import axios from 'axios';
import { FETCH_BOOK, saveBook } from 'src/actions/livre';

const livre = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_BOOK: {
      axios.get(`http://3.91.26.197/projet-book-back/API/public/book/${action.bookISBN}`)
        .then((response) => {
          const bookToDispatch = saveBook(response.data);
          store.dispatch(bookToDispatch);
          console.log('livre middleware ', response);
        })
        .catch((error) => console.log('catalogue trié par auteur', error));
      // console.log('middleware', action.authorId);
      break;
    }
    default:
      next(action);
  }
};

export default livre;
