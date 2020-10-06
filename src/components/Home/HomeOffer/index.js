import React from 'react';
import BookOffer from './BookOffer';
import BookOffer1 from './BookOffer1';
import BookOffer2 from './BookOffer2';
import BookOffer3 from './BookOffer3';

import './styles.scss';

const HomeOffer = () => (
  <div className="home_offer">
    <h1 className="home_offer__title">Les dernières offres de la communauté</h1>
    <div className="home_offer__shelf" />
    <div className="home_offer__shelfbottom" />
    <div className="home_offer__books">
      <BookOffer3 />
      <BookOffer1 />
      <BookOffer />
      <BookOffer2 />
    </div>
  </div>
);

export default HomeOffer;
