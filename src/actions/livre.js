/* eslint-disable import/prefer-default-export */

// action types
export const FETCH_BOOK = 'FETCH_BOOK';
export const SAVE_BOOK = 'SAVE_BOOK';

// action creators
export const fetchBook = (bookISBN) => ({
  type: FETCH_BOOK,
  bookISBN,
});

// l'action saveBook recevra en paramètre les données 
// que l'on recevra de l'API, on stockera ces données dans une 
// propriété de l'objet action, ici book
export const saveBook = (book) => ({
  type: SAVE_BOOK,
  book,
});
