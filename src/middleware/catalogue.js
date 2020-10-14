import axios from 'axios';
import { FETCH_CATALOGUE, saveCatalogue, FETCH_CATEGORY, FETCH_CATALOGUE_FILTER_AUTHOR, FETCH_CATALOGUE_FILTER_CATEGORY, FETCH_CATALOGUE_INDEX } from 'src/actions/catalogue';

const catalogue = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_CATALOGUE: {
      axios.get('http://3.91.26.197/projet-book-back/API/public/book/list?limit=30')
        .then((response) => {
          const catalogueToDispatch = saveCatalogue(response.data);
          store.dispatch(catalogueToDispatch);
          // console.log('catalogue', response);
        })
        .catch((error) => console.log('catalogue', error));
      break;
    }
    case FETCH_CATALOGUE_FILTER_AUTHOR: {
      // console.log(action.indexPage);
      const itemsByPage = action.indexPage * 30;
      axios.get(`http://3.91.26.197/projet-book-back/API/public/author/${action.authorId}?limit=${itemsByPage}`)
        .then((response) => {
          const catalogueToDispatch = saveCatalogue(response.data);
          store.dispatch(catalogueToDispatch);
          // console.log('catalogue trié par auteur', response);
        })
        .catch((error) => console.log('catalogue trié par auteur', error));
      // console.log('middleware', action.authorId);
      break;
    }
    case FETCH_CATALOGUE_FILTER_CATEGORY: {
      // console.log(action.indexPage);
      const itemsByPage = action.indexPage * 30;
      axios.get(`http://3.91.26.197/projet-book-back/API/public/category/${action.categoryId}?limit=${itemsByPage}`)
        .then((response) => {
          const catalogueToDispatch = saveCatalogue(response.data);
          store.dispatch(catalogueToDispatch);
          // console.log('catalogue trié par auteur', response);
        })
        .catch((error) => console.log('catalogue trié par categorie', error));
      // console.log('middleware', action.authorId);
      break;
    }
    case FETCH_CATALOGUE_INDEX: {
      const itemsByPage = action.indexPage * 30;
      axios.get(`http://3.91.26.197/projet-book-back/API/public/book/list?limit=${itemsByPage}`)
        .then((response) => {
          const catalogueToDispatch = saveCatalogue(response.data);
          store.dispatch(catalogueToDispatch);
          // console.log('catalogue', response);
        })
        .catch((error) => console.log('catalogue', error));
      break;
    }
    case FETCH_CATEGORY: {
      axios.get(`http://3.91.26.197/projet-book-back/API/public/category/${action.categoryId}?limit=30`)
        .then((response) => {
          const catalogueToDispatch = saveCatalogue(response.data);
          store.dispatch(catalogueToDispatch);
          // console.log('catalogue trié par auteur', response);
        })
        .catch((error) => console.log('catalogue trié par categorie', error));
      break;
    }

    default:
      next(action);
  }
};

export default catalogue;
