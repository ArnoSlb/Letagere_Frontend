/* eslint-disable import/prefer-default-export */

// action types
export const FETCH_BOOK_AUTHOR = 'FETCH_BOOK_AUTHOR';
export const SAVE_BOOK_AUTHOR = 'SAVE_BOOK_AUTHOR';

// action creators
export const fetchBookAuthor = (authorId) => ({
  type: FETCH_BOOK_AUTHOR,
  authorId,
});

// l'action saveBook recevra en paramètre les données 
// que l'on recevra de l'API, on stockera ces données dans une 
// propriété de l'objet action, ici bookAuthor
export const saveBookAuthor = (bookAuthor) => ({
  type: SAVE_BOOK_AUTHOR,
  bookAuthor,
});
