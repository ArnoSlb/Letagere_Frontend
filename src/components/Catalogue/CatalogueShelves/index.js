import React from 'react';
import { Link } from 'react-router-dom';

import Shelf from 'src/components/Catalogue/CatalogueShelf';
import BookShelfList from 'src/containers/BookShelfList';

import './styles.scss';

const CatalogueShelves = ({ catalogue, fetchCatalogueIndex }) => {
  // console.log(catalogue);

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

  const booksByShelf = Math.floor(widthBookShelfList / 171.76);
  // booksByshlef est égale à la largeur de widthBookShelfList divisé par la largeur d'un item
  // on obtient le nmbre d'items qui peuvent tenir sur cette largeur
  // que l'on arrondis au chiffres inférieur entier le plus proche

  let shelvesNumber = 0;

  if (catalogue.books.length <= booksByShelf) {
    shelvesNumber = 1;
    // si le nombre de livre du catalogue est inférieur ou égale au nmbre de livre par étagère
    // autorisé par étagere alors le nombre d'etagere est de 1
  }
  else if (catalogue.books.length % booksByShelf >= 1) {
    shelvesNumber = (Math.floor(catalogue.books.length / booksByShelf)) + 1;
  }
  // si le modulo du nmbre de livre dans le catalogue par le nombre autorisé par étagere
  // est supérieur ou égale 1 alors je rajoute une étagere
  // ex: 39 modulo 5 = 4 car 7x5=35 il me reste donc 4 livres => je rajoute une étagere en plus
  else {
    shelvesNumber = catalogue.books.length / booksByShelf;
  }
  const shelves = catalogue.books.slice(0, shelvesNumber).map((shelf) => <Shelf key={shelf.id} />);
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

  let articlesViewed = 30;
  if (articlesViewed > catalogue.countItems) {
    articlesViewed = catalogue.countItems;
  }
  else {
    articlesViewed = 30;
  }

  let resultViewed = '';
  if (catalogue.countItems <= 1) {
    resultViewed = `Vous avez vu ${articlesViewed} sur ${catalogue.countItems} résultat`;
  }
  else {
    resultViewed = `Vous avez vu ${articlesViewed} sur ${catalogue.countItems} résultats`;
  }

  const newIndexPage = 2;

  let plusButton = '';
  if (catalogue.countItems == articlesViewed) {
    plusButton = '';
  }
  else if (catalogue.countItems > 30) {
    plusButton = (
      <div className="plusbutton">
        <Link
          onClick={() => fetchCatalogueIndex(newIndexPage)}
          className="plusbutton__link"
          to={`/catalogue/${newIndexPage}`}
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


export default CatalogueShelves;
