/* eslint-disable import/prefer-default-export */
import slugify from 'slugify';

/**
 * Fonction qui retourne un slug
 * @param {string} title - chaine de caractère à "slugifier"
 */
export const getSlugifiedTitle = (title = '') => {
  // la fonction slugify ne traite pas les & et _, on doit donc le faire à la main
  // pour cela on utilise la fonction replace et on lui passe une regex pour
  // que toutes les occurences de & ou _ soient remplacées
  const modifiedTitle = title.replace(/&/g, '').replace(/_/g, '-');

  const slugifiedTitle = slugify(modifiedTitle, {
    lower: true,
    remove: /[@]/g,
  });

  return slugifiedTitle;
};

/**
 * Fonction qui retourne le path d'une recette en fonction du titre
 * @param {string} title - titre de la recette
 */
export const getBookUrl = (title) => `/livre/${getSlugifiedTitle(title)}`;

/**
 * Fonction qui retourne une recette en fonction du slug du path
 * @param {array} recipes - tableau des recettes
 * @param {string} slug - chaine de caractère à rechercher
 */
export const getBookBySlug = (books, slug) => books.find((livre) => {
  const slugifiedISBN = getSlugifiedTitle(livre.ISBN);
  return slugifiedISBN === slug;
});

// /**
//  * Fonction qui retourne un titre en fonction du nombre de recettes
//  * @param {number} recipeNumber - nombre de recette attendu
//  */
// export const getTitleByRecipeNumber = (recipeNumber) => {
//   let title = 'Pas de recette :( revenez plus tard';

//   if (recipeNumber === 1) {
//     title = 'Régalez-vous avec notre recette !';
//   }

//   if (recipeNumber > 1) {
//     title = `Régalez-vous avec nos ${recipeNumber} recettes !`;
//   }

//   return title;
// };
