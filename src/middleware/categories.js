import axios from 'axios';
import { FETCH_CATEGORIES, saveCategories } from 'src/actions/categories';

const categories = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_CATEGORIES: {
      axios.get('http://3.91.26.197/projet-book-back/API/public/category/list')
        .then((response) => {
          const categoriesToDispatch = saveCategories(response.data);
          store.dispatch(categoriesToDispatch);
          // console.log('categories', response);
        })
        .catch((error) => console.log('categories', error));
      break;
    }

    default:
      next(action);
  }
};

// countItems

export default categories;
