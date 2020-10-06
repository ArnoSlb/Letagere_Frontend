import React from 'react';

import { Link } from 'react-router-dom';

import Shelf from 'src/components/Catalogue/CatalogueShelf';
import BookShelfList from 'src/containers/BookShelfListFiltre';

import './styles.scss';
const CatalogueShelves = (props) =>
console.log(props);

  (
    <div className="catalogueshelves">
      {/* <p>{catalogue.countItems} résultats trouvés à votre recherche</p> */}
      <p>2 résultats trouvés à votre recherche</p>
      <Shelf />
      <Shelf />
      <Shelf />
      <Shelf />
      <Shelf />
      <Shelf />
      <BookShelfList />
    </div>
  );

export default CatalogueShelves;
