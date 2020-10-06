// == Import : npm
import { createStore, compose, applyMiddleware } from 'redux';

// == Import : local
import rootReducer from 'src/reducers';
import catalogue from 'src/middleware/catalogue';
import add from 'src/middleware/addLibrary';
import addWish from 'src/middleware/addWish';
import authors from 'src/middleware/authors';
import categories from 'src/middleware/categories';
import livre from 'src/middleware/livre';


// == Enhancers
const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const enhancers = composeEnhancers(
  applyMiddleware(
    catalogue,
    add,
    addWish,
    authors,
    categories,
    livre,
  ),
);

// == Store
const store = createStore(
  rootReducer,
  // // preloadedState,
  enhancers,

);

// == Export
export default store;
