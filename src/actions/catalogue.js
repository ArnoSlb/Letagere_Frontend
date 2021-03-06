/* eslint-disable import/prefer-default-export */

// action types
export const FETCH_CATALOGUE = 'FETCH_CATALOGUE';
export const FETCH_CATALOGUE_FILTER_AUTHOR = 'FETCH_CATALOGUE_FILTER_AUTHOR';
export const FETCH_CATALOGUE_FILTER_CATEGORY = 'FETCH_CATALOGUE_FILTER_CATEGORY';
export const FETCH_CATALOGUE_INDEX = 'FETCH_CATALOGUE_INDEX';
export const FETCH_AUTHOR = 'FETCH_AUTHOR';
export const FETCH_CATEGORY = 'FETCH_CATEGORY';
export const SAVE_CATALOGUE = 'SAVE_CATALOGUE';
export const SAVE_ITEMS = 'SAVE_ITEMS';

// action creators
export const fetchCatalogue = () => ({
  type: FETCH_CATALOGUE,
});

export const fetchCatalogueFilterAuthor = (authorId, indexPage) => ({
  type: FETCH_CATALOGUE_FILTER_AUTHOR,
  authorId,
  indexPage,
});

export const fetchCatalogueFilterCategory = (categoryId, indexPage) => ({
  type: FETCH_CATALOGUE_FILTER_CATEGORY,
  categoryId,
  indexPage,
});

export const fetchCatalogueIndex = (indexPage) => ({
  type: FETCH_CATALOGUE_INDEX,
  indexPage,
});

export const fetchAuthor = (authorId) => ({
  type: FETCH_AUTHOR,
  authorId,
});

export const fetchCategory = (categoryId) => ({
  type: FETCH_CATEGORY,
  categoryId,
});

// l'action saveCatalogue recevra en paramètre les données 
// que l'on recevra de l'API, on stockera ces données dans une 
// propriété de l'objet action, ici catalogue
export const saveCatalogue = (catalogue) => ({
  type: SAVE_CATALOGUE,
  catalogue,
});
