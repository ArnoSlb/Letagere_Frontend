import React from 'react';

import BookCard4 from 'src/components/Catalogue/BookCard4';
import BookCard5 from 'src/components/Catalogue/BookCard5';
import BookCard6 from 'src/components/Catalogue/BookCard6';
import BookCard7 from 'src/components/Catalogue/BookCard7';
import arrow from 'src/assets/images/arrow-88-128.png';
import './styles.scss';

const LivreAuteur = () => (
  <div className="livreauteur">
    <div className="livreauteur__frame">
      <h1 className="livreauteur__frame__title">Les livres du même auteur</h1>
      <div className="livreauteur__frame__position">
        {/* <img className="livreauteur__frame__position__flechegauche" src={arrow} alt="" /> */}
        <div className="livreauteur__frame__position__auteur">
          <BookCard4 />
          <BookCard5 />
          <BookCard6 />
          <BookCard7 />
        </div>
        {/* <img className="livreauteur__frame__position__flechedroite" src={arrow} alt="" /> */}
      </div>
    </div>

  </div>
);

export default LivreAuteur;
