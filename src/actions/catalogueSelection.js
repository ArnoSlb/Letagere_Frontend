/* eslint-disable import/prefer-default-export */

// action types
export const FETCH_SELECTION = 'FETCH_SELECTION';
export const SAVE_SELECTION = 'SAVE_SELECTION';

// action creators
export const fetchSelection = () => ({
  type: FETCH_SELECTION,
});

// l'action saveCatalogue recevra en paramètre les données 
// que l'on recevra de l'API, on stockera ces données dans une 
// propriété de l'objet action, ici catalogue
export const saveSelection = (selection) => ({
  type: SAVE_SELECTION,
  selection,
});
