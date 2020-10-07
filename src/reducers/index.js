import { combineReducers } from 'redux';

import catalogue from './catalogueBddTest';
import add from './addLibrary';
import addWish from './addWish';
import authors from './authors';
import categories from './categories';
import livre from './livre';
import selections from './selections_weekly';

export default combineReducers({
  catalogue,
  add,
  addWish,
  authors,
  categories,
  livre,
  selections,
});
