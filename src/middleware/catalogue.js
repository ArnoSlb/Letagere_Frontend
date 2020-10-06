import axios from 'axios';
import { FETCH_CATALOGUE, saveCatalogue, FETCH_AUTHOR, FETCH_CATEGORY } from 'src/actions/catalogue';

const catalogue = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_CATALOGUE: {
      axios.get('http://3.91.26.197/projet-book-back/API/public/book/list')
        .then((response) => {
          const catalogueToDispatch = saveCatalogue(response.data);
          store.dispatch(catalogueToDispatch);
          // console.log('catalogue', response);
        })
        .catch((error) => console.log('catalogue', error));
      break;
    }
    case FETCH_AUTHOR: {
      // axios.get(`url${action.authorId}`)
      axios.get(`http://3.91.26.197/projet-book-back/API/public/author/${action.authorId}`)
        .then((response) => {
          const catalogueToDispatch = saveCatalogue(response.data);
          store.dispatch(catalogueToDispatch);
          // console.log('catalogue trié par auteur', response);
        })
        .catch((error) => console.log('catalogue trié par auteur', error));
      // console.log('middleware', action.authorId);
      break;
    }
    case FETCH_CATEGORY: {
      axios.get(`http://3.91.26.197/projet-book-back/API/public/category/${action.categoryId}`)
        .then((response) => {
          const catalogueToDispatch = saveCatalogue(response.data);
          store.dispatch(catalogueToDispatch);
          // console.log('catalogue trié par auteur', response);
        })
        .catch((error) => console.log('catalogue trié par auteur', error));
      break;
    }

    default:
      next(action);
  }
};

export default catalogue;
