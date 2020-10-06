import React from 'react';
import plus from 'src/assets/images/plus-5-xxl.png';
import heart from 'src/assets/images/heart-xxl.png';
import wd from 'src/assets/images/Batman.jpg';
import rating from 'src/assets/images/Groupe 35.png';
import profilepic from 'src/assets/images/Rectangle -3.png';

const BookOffer = () => (
  <div className="bookoffer">
    <div className="bookoffer__icons">
      <a href="#"><img src={plus} alt="" /> </a>
      <a href="#"><img src={heart} alt="" /> </a>
    </div>
    <a href="#"><img className="bookoffer__book" src={wd} alt="" /></a>
    <div className="bookoffer__infos">
      <div className="bookoffer__infos__user">
        <img className="bookoffer__infos__user__profilepic" src={profilepic} alt="" />
        <span className="bookoffer__infos__user__name">Stephanie</span>
        <span className="bookoffer__infos__user__city">Lille (59)</span>
      </div>
      <div className="bookoffer__infos__book">
        <span className="bookoffer__infos__book__title">The dark knight returns</span>
        <span className="bookoffer__infos__book__author">Alan Moore</span>
        <img className="bookoffer__infos__book__rating" src={rating} alt="" />
      </div>
      <div className="bookoffer__infos__price">
        <span>18,99€</span>
      </div>
      <a className="bookoffer__infos__interest" href="#">Ça m'intéresse</a>
    </div>

  </div>
);

export default BookOffer;
