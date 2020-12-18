import React, { useEffect } from 'react';
import DotLoader from 'react-spinners/DotLoader';

import Selection from 'src/containers/CatalogueSelection';
import Filter from 'src/containers/Filter';
import Shelves from 'src/containers/CatalogueShelves';
import AddMessage from 'src/components/AddTo/AddMessage';
import './styles.scss';

const Catalogue = ({
  fetchCatalogue,
  loading,
  fetchAuthors,
  fetchCategories,
  fetchSelection,
  loadingSelection,
}) => {
  // au 1e rendu du composant je veux charger les données du catalogue
  // je passe par useEffect et donne bien en 2e argument un tableau vide
  // j'exécute dans le callback la fonction que je passerai à la prop
  // fetchCatalogue, fetchAuthors, fetchCategories
  useEffect(() => {
    fetchCatalogue();
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
                <Shelves />
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Catalogue;
