/* eslint-disable import/prefer-default-export */

// action types
export const FETCH_AUTHORS = 'FETCH_AUTHORS';
export const SAVE_AUTHORS = 'SAVE_AUTHORS';

// action creators
export const fetchAuthors = () => ({
  type: FETCH_AUTHORS,
});

// l'action saveCatalogue recevra en paramètre les données 
// que l'on recevra de l'API, on stockera ces données dans une 
// propriété de l'objet action, ici authors
export const saveAuthors = (authors) => ({
  type: SAVE_AUTHORS,
  authors,
});
