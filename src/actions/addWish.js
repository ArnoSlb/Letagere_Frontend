/* eslint-disable import/prefer-default-export */

// action types
export const FETCH_ADD_WISH = 'FETCH_ADD_WISH';
export const SAVE_ADD_WISH = 'SAVE_ADD_WISH';

// action creators
export const fetchAddWish = () => ({
  type: FETCH_ADD_WISH,
});

// l'action saveCatalogue recevra en paramètre les données 
// que l'on recevra de l'API, on stockera ces données dans une 
// propriété de l'objet action, ici catalogue
export const saveAddWish = (addWish) => ({
  type: SAVE_ADD_WISH,
  addWish,
});
