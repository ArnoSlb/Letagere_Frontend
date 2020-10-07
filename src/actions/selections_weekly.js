/* eslint-disable import/prefer-default-export */

// action types
export const FETCH_HEART = 'FETCH_HEART';
export const SAVE_HEART = 'SAVE_HEART';

// action creators
export const fetchHeart = () => ({
  type: FETCH_HEART,
});

// l'action saveCatalogue recevra en paramètre les données 
// que l'on recevra de l'API, on stockera ces données dans une 
// propriété de l'objet action, ici catalogue
export const saveHeart = (heart) => ({
  type: SAVE_HEART,
  heart,
});
