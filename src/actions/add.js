/* eslint-disable import/prefer-default-export */

// action types
export const FETCH_ADD = 'FETCH_ADD';
export const SAVE_ADD = 'SAVE_ADD';

// action creators
export const fetchAdd = () => ({
  type: FETCH_ADD,
});

// l'action saveCatalogue recevra en paramètre les données 
// que l'on recevra de l'API, on stockera ces données dans une 
// propriété de l'objet action, ici catalogue
export const saveAdd = (add) => ({
  type: SAVE_ADD,
  add,
});
