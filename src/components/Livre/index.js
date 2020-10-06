import React, { useEffect } from 'react';
import DotLoader from 'react-spinners/DotLoader';

import LivrePresentation from 'src/components/Livre/LivrePresentation';
import LivreOffres from 'src/components/Livre/LivreOffres';
import LivreInteret from 'src/components/Livre/LivreInteret';
import LivreAuteur from 'src/components/Livre/LivreAuteur';
import LivreEnsembleAvis from 'src/components/Livre/LivreEnsembleAvis';
import AddMessage from 'src/components/AddTo/AddMessage';

import './styles.scss';

const Livre = ({
  livre, slug, fetchBook, loading,
}) => {
  console.log('composant livre', livre);

  // au 1e rendu du composant je veux charger les données du catalogue
  // je passe par useEffect et donne bien en 2e argument un tableau vide
  // j'exécute dans le callback la fonction que je passerai à la prop
  // fetchRecipes
  useEffect(() => {
    fetchBook(slug);
  }, []);

  const reviews = livre.reviews;
  console.log('reviews', reviews);

  const advices = livre.advices;
  console.log('advices', advices);

  return (
    <div className="livre_container">
      <AddMessage />
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
        <div className="livre">
          <div className="livre__colonnegauche">
            <LivrePresentation livre={livre} />
            <LivreOffres livre={livre} />
            <LivreInteret />
            <LivreAuteur />
          </div>
          <div className="livre__colonnedroite">
            <div className="livre__colonnedroite__avis">
              <LivreEnsembleAvis avis={advices} critiques={reviews} />
            </div>
            <div className="livre__colonnedroite__critiques" />
          </div>
        </div>
      )}
    </div>

  );
};

export default Livre;
