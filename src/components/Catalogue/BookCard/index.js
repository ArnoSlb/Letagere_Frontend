import React from 'react';
import { Link } from 'react-router-dom';

import firstCover from 'src/assets/images/uneviechoisie.jpg';
import GreenBook from 'src/assets/images/book-xxl green.png';
import GreyBook from 'src/assets/images/book-xxl grey.png';
import Heart from 'src/assets/images/heart-xxl.png';
import Plus from 'src/assets/images/plus-5-xxl.png';

import './styles.scss';

const BookCard = () => (
  <div className="bookcard">
    <div className="bookcard__infos">
      <Link to="/livre/979-1034737123">
        <img className="bookcard__infos__cover" src="https://www.amazon.fr/images/I/51Jv4O7a8bL._SX375_BO1,204,203,200_.jpg" alt="" />
      </Link>
      <span className="bookcard__infos__title">Michel Vaillant</span>
      <span className="bookcard__infos__author">Lapière</span>
      <div className="bookcard__infos__rating">
        <img className="bookcard__infos__rating__point" src={GreenBook} alt="" />
        <img className="bookcard__infos__rating__point" src={GreenBook} alt="" />
        <img className="bookcard__infos__rating__point" src={GreenBook} alt="" />
        <img className="bookcard__infos__rating__point" src={GreenBook} alt="" />
        <img className="bookcard__infos__rating__point" src={GreyBook} alt="" />
      </div>
    </div>
    <div className="bookcard__icons">
      <Link>
        <img className="bookcard__icons__heart" src={Heart} alt="" />
      </Link>
      <Link>
        <img className="bookcard__icons__plus" src={Plus} alt="" />
      </Link>
    </div>
  </div>
);

export default BookCard;
