/* eslint-disable import/prefer-default-export */

// action types
export const FETCH_BOOK_INTEREST = 'FETCH_BOOK_INTEREST';
export const SAVE_BOOK_INTEREST = 'SAVE_BOOK_INTEREST';

// action creators
export const fetchBookInterest = (categoryId) => ({
  type: FETCH_BOOK_INTEREST,
  categoryId,
});

// l'action saveBook recevra en paramètre les données 
// que l'on recevra de l'API, on stockera ces données dans une 
// propriété de l'objet action, ici bookAuthor
export const saveBookInterest = (bookInterest) => ({
  type: SAVE_BOOK_INTEREST,
  bookInterest,
});
