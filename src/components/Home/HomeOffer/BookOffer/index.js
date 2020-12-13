import React from 'react';
import plus from 'src/assets/images/plus-5-xxl.png';
import heart from 'src/assets/images/heart-xxl.png';
import wd from 'src/assets/images/the-walking-dead-1_c4919f8289.jpg';
import rating from 'src/assets/images/Groupe 33.png';
import profilepic from 'src/assets/images/Rectangle -1.png';

import './styles.scss';

const BookOffer = () => (
  <div className="bookoffer">
    <div className="bookoffer__icons">
      <img src={plus} alt="" />
      <img src={heart} alt="" />
    </div>
    <img className="bookoffer__book" src={wd} alt="" />
    <div className="bookoffer__infos">
      <div className="bookoffer__infos__user">
        <img className="bookoffer__infos__user__profilepic" src={profilepic} alt="" />
        <span className="bookoffer__infos__user__name">Miguel</span>
        <span className="bookoffer__infos__user__city">Toulouse (31)</span>
      </div>
      <div className="bookoffer__infos__book">
        <span className="bookoffer__infos__book__title">The walking dead</span>
        <span className="bookoffer__infos__book__author">Robert Korkman</span>
        <img className="bookoffer__infos__book__rating" src={rating} alt="" />
      </div>
      <div className="bookoffer__infos__price">
        <span>13,99€</span>
      </div>
      <a className="bookoffer__infos__interest">Ça m'intéresse</a>
    </div>

  </div>
);

export default BookOffer;
