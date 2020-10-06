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
 * Fonction qui retourne le path d'un livre en fonction de l'auteur
 * @param {string} title - nom de l'auteur
 */
export const getAuthorUrl = (title) => `/catalogue/auteur/${getSlugifiedTitle(title)}`;

/**
 * Fonction qui retourne le path d'un livre en fonction de l'auteur
 * @param {string} title - nom de la categorie
 */
export const getCategoryUrl = (title) => `/catalogue/categorie/${getSlugifiedTitle(title)}`;

/**
 * Fonction qui retourne une recette en fonction du slug du path
 * @param {array} recipes - tableau des recettes
 * @param {string} slug - chaine de caractère à rechercher
 */
export const getBookByAuthor = (books, slug) => books.find((livre) => {
  const slugifiedAuthor = getSlugifiedTitle(livre.author);
  return slugifiedAuthor === slug;
});

export const getBookByCategorie = (books, slug) => books.find((livre) => {
  const slugifiedAuthor = getSlugifiedTitle(livre.categorie);
  return slugifiedAuthor === slug;
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
