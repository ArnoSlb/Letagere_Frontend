/* eslint-disable import/prefer-default-export */

// action types
export const FETCH_CATEGORIES = 'FETCH_CATEGORIES';
export const SAVE_CATEGORIES = 'SAVE_CATEGORIES';

// action creators
export const fetchCategories = () => ({
  type: FETCH_CATEGORIES,
});

// l'action saveCatalogue recevra en paramètre les données 
// que l'on recevra de l'API, on stockera ces données dans une 
// propriété de l'objet action, ici catalogue
export const saveCategories = (categories) => ({
  type: SAVE_CATEGORIES,
  categories,
});
