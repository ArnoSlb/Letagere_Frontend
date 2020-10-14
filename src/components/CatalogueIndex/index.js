import React, { useEffect } from 'react';
import DotLoader from 'react-spinners/DotLoader';

import Selection from 'src/containers/CatalogueSelection';
import Filter from 'src/containers/Filter';
import CatalogueShelvesIndex from 'src/containers/CatalogueShelvesIndex';
import AddMessage from 'src/components/AddTo/AddMessage';

const Catalogue = ({
  fetchCatalogueIndex,
  loading,
  fetchAuthors,
  fetchCategories,
  fetchSelection,
  loadingSelection,
  indexPage,
}) => {
  // au 1e rendu du composant je veux charger les données du catalogue
  // je passe par useEffect et donne bien en 2e argument un tableau vide
  // j'exécute dans le callback la fonction que je passerai à la prop
  // fetchCatalogue, fetchAuthors, fetchCategories
  useEffect(() => {
    fetchCatalogueIndex(indexPage);
    fetchAuthors();
    fetchCategories();
    fetchSelection();
  }, []);

  return (
    <div>
      {loading ? (
        <div className="loader">
          <h1>Chargement</h1>
          <div className="loader__anim">
            <DotLoader
              size={50}
              color="#24816C"
              loading={loading}
            />
          </div>
        </div>
      ) : (
        <div>
          {loadingSelection ? (
            <div className="loader">
              <h1>Chargement</h1>
              <div className="loader__anim">
                <DotLoader
                  size={50}
                  color="#24816C"
                  loading={loading}
                />
              </div>
            </div>
          ) : (
            <div className="catalogue-container">

              <AddMessage />
              <div className="catalogue">
                <Selection />
              </div>
              <div className="catalogue__miseenpage">
                <Filter />
                <CatalogueShelvesIndex indexPage={indexPage} />
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Catalogue;
