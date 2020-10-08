import axios from 'axios';
import { FETCH_BOOK, saveBook } from 'src/actions/livre';
import { FETCH_BOOK_AUTHOR, saveBookAuthor } from 'src/actions/livreAuteur';
import { FETCH_BOOK_INTEREST, saveBookInterest } from 'src/actions/livreInteret';

const livre = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_BOOK: {
      axios.get(`http://3.91.26.197/projet-book-back/API/public/book/${action.bookISBN}`)
        .then((response) => {
          const bookToDispatch = saveBook(response.data);
          store.dispatch(bookToDispatch);
          console.log('livre middleware ', response);
        })
        .catch((error) => console.log('livre middleware', error));
      // console.log('middleware', action.authorId);
      break;
    }
    case FETCH_BOOK_AUTHOR: {
      axios.get(`http://3.91.26.197/projet-book-back/API/public/author/${action.authorId}`)
        .then((response) => {
          const bookAuthorToDispatch = saveBookAuthor(response.data);
          store.dispatch(bookAuthorToDispatch);
          console.log('livre middleware auteur', response);
        })
        .catch((error) => console.log('livre middleware auteur', error));
      // console.log('middleware', action.authorId);
      break;
    }
    case FETCH_BOOK_INTEREST: {
      axios.get(`http://3.91.26.197/projet-book-back/API/public/category/${action.categoryId}`)
        .then((response) => {
          const bookInterestToDispatch = saveBookInterest(response.data);
          store.dispatch(bookInterestToDispatch);
          console.log('livre middleware interet', response);
        })
        .catch((error) => console.log('livre middleware interet', error));
      // console.log('middleware', action.authorId);
      break;
    }
    default:
      next(action);
  }
};

export default livre;
