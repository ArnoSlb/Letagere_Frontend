import React from 'react';
import plus from 'src/assets/images/plus-5-xxl.png';
import heart from 'src/assets/images/heart-xxl.png';
import wd from 'src/assets/images/Batman.jpg';
import rating from 'src/assets/images/Groupe 35.png';
import profilepic from 'src/assets/images/Rectangle -47.png';

const BookOffer = () => (
  <div className="bookoffer">
    <div className="bookoffer__icons">
      <a href="#"><img src={plus} alt="" /> </a>
      <a href="#"><img src={heart} alt="" /> </a>
    </div>
    <a href="/livre/9782290156377"><img className="bookoffer__book" src="http://books.google.com/books/content?id=xlM3DwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api" alt="" /></a>
    <div className="bookoffer__infos">
      <div className="bookoffer__infos__user">
        <img className="bookoffer__infos__user__profilepic" src={profilepic} alt="" />
        <span className="bookoffer__infos__user__name">Ajay</span>
        <span className="bookoffer__infos__user__city">Strasbourg (67)</span>
      </div>
      <div className="bookoffer__infos__book">
        <span className="bookoffer__infos__book__title">Colorado kid</span>
        <span className="bookoffer__infos__book__author">Stephen King</span>
        <img className="bookoffer__infos__book__rating" src={rating} alt="" />
      </div>
      <div className="bookoffer__infos__price">
        <span>15€</span>
      </div>
      <a className="bookoffer__infos__interest" href="#">Ça m'intéresse</a>
    </div>

  </div>
);

export default BookOffer;
