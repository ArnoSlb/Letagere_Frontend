import React from 'react';

import Selection from 'src/components/Catalogue/Selection';
import Filter from 'src/containers/Filter';
import Shelves from 'src/containers/CatalogueShelvesFiltre';

const CatalogueFiltre = ({ slug }) => {
  console.log('slug', slug);

  return (
    <div className="catalogue">
      <Selection />
      <div className="catalogue__miseenpage">
        <Filter />
        <Shelves slug={slug} />
      </div>
    </div>
  );
};

export default CatalogueFiltre;
