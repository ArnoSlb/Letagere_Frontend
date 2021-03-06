import React from 'react';
import { Link } from 'react-router-dom';

import Shelf from 'src/components/Catalogue/CatalogueShelf';
import BookShelfList from 'src/containers/BookShelfList';

const CatalogueShelvesCategory = ({
  catalogue, categoryId, indexPage, fetchCatalogueFilterCategory,
}) => {
  // console.log(indexPage);

  function viewportSize() {
    const d = document.documentElement;
    return {
      height: d.clientHeight,
      width: d.clientWidth,
    };
  }
  const tailles = viewportSize();
  const largeur = tailles.width;

  let widthBookShelfList = (((72 * largeur) / 100) - 250);
  if (widthBookShelfList > 1100) {
    widthBookShelfList = 1100;
  }
  // widthBookByShelfList est égale à 72% de la largeur du viewport moins 250px(largeur du filtre)
  // console.log(widthBookShelfList);

  const booksByShelf = Math.floor(widthBookShelfList / 171.76);
  // booksByshlef est égale à la largeur de widthBookShelfList divisé par la largeur d'un item
  // on obtient le nmbre d'items qui peuvent teznir sur cette largeur
  // que l'on arrondis au chiffres intérieur entier le plus proche

  let shelvesNumber = 0;

  if (catalogue.books.length <= booksByShelf) {
    shelvesNumber = 1;
    // si le nombre de livre du catalogue est inférieur ou égale au nmbre de livre
    // autorisé par étagere alors le nombre d'etagere est de 1
  }
  else if (catalogue.books.length % booksByShelf >= 1) {
    shelvesNumber = (Math.floor(catalogue.books.length / booksByShelf)) + 1;
  }
  // si le modulo du nmbre de livre dans le catalogue par le nombre autorisé par étagere
  // est supérieur ou égale 1 alors je rajoute une étagere
  // ex: 38 modulo 5 = 3 car 7x5=35 il me reste donc 3 livres => je rajoute une étagere en plus
  else {
    shelvesNumber = catalogue.books.length / booksByShelf;
  }
  const shelves = catalogue.books.slice(0, shelvesNumber).map((shelf) => <Shelf />);
  // Avec shelves je boucle sur le tableau que je recois de l'API
  // je limite le nombre de boucle avec slice pour ne pas boucler 36 fois (nmbre d'items dans le tableau)
  // je rends dynamique le nmbre limite avec shelvesNumber

  let countItems = '';
  if (catalogue.countItems <= 1) {
    countItems = `${catalogue.countItems} résultat trouvé à votre recherche`;
  }
  else {
    countItems = `${catalogue.countItems} résultats trouvés à votre recherche`;
  }

  const newIndexPage = Number(indexPage) + 1;

  let articlesViewed = Number(indexPage) * 30;
  if (articlesViewed > catalogue.countItems) {
    articlesViewed = catalogue.countItems;
  }
  else {
    articlesViewed = Number(indexPage) * 30;
  }

  let resultViewed = '';
  if (catalogue.countItems <= 1) {
    resultViewed = `Vous avez vu ${articlesViewed} sur ${catalogue.countItems} résultat`;
  }
  else {
    resultViewed = `Vous avez vu ${articlesViewed} sur ${catalogue.countItems} résultats`;
  }

  let plusButton = '';
  if (catalogue.countItems == articlesViewed) {
    plusButton = '';
  }
  else if (catalogue.countItems > 30) {
    plusButton = (
      <div className="plusbutton">
        <Link
          onClick={() => fetchCatalogueFilterCategory(categoryId, newIndexPage)}
          className="plusbutton__link"
          to={`/catalogue/categorie/${categoryId}/${newIndexPage}`}
        >
          Voir plus
        </Link>
      </div>
    );
  }
  else {
    plusButton = '';
  }

  return (
    <div className="catalogueshelves">
      <p className="catalogue__countitems">{countItems}</p>
      {shelves}
      <BookShelfList />
      <p className="catalogueshelves__resultsview">{resultViewed}</p>
      {plusButton}
    </div>
  );
};
// console.log(catalogue);

export default CatalogueShelvesCategory;
