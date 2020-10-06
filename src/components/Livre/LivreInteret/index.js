import React from 'react';

import BookCard from 'src/components/Catalogue/BookCard';
import BookCard11 from 'src/components/Catalogue/BookCard11';
import BookCard3 from 'src/components/Catalogue/BookCard3';
import BookCard8 from 'src/components/Catalogue/BookCard8';
import BookCard12 from 'src/components/Catalogue/BookCard12';
import arrow from 'src/assets/images/arrow-88-128.png';
import './styles.scss';

const LivreInteret = () => (
  <div className="livreinteret">
    <div className="livreinteret__frame">
      <h1 className="livreinteret__frame__title">Les livres qui pourraient aussi vous interesser</h1>
      <div className="livreinteret__frame__position">
        {/* <img className="livreinteret__frame__position__flechegauche" src={arrow} alt="" /> */}
        <div className="livreinteret__frame__position__interet">
          <BookCard12 />
          <BookCard11 />
          <BookCard3 />
          <BookCard8 />
        </div>
        {/* <img className="livreinteret__frame__position__flechedroite" src={arrow} alt="" /> */}
      </div>
    </div>

  </div>
);

export default LivreInteret;
