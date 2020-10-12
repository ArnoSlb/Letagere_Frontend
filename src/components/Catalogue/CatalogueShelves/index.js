import React from 'react';

import { Link } from 'react-router-dom';

import Shelf from 'src/components/Catalogue/CatalogueShelf';
import BookShelfList from 'src/containers/BookShelfList';

import './styles.scss';

const CatalogueShelves = ({ catalogue }) =>
// console.log(catalogue);

  (
    <div className="catalogueshelves">

      <p className="catalogue_countitems">{catalogue.countItems} résultats trouvés à votre recherche</p>
      <Shelf />
      <Shelf />
      <Shelf />
      <Shelf />
      <Shelf />
      <Shelf />
      <BookShelfList />
      {/* <Link to="/catalogue/2">
        <p className="catalogueshelves__pages">page suivante ></p>
      </Link> */}
    </div>
  );

export default CatalogueShelves;
