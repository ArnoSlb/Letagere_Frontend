import React from 'react';
import { Link } from 'react-router-dom';

import firstCover from 'src/assets/images/uneviechoisie.jpg';
import GreenBook from 'src/assets/images/book-xxl green.png';
import GreyBook from 'src/assets/images/book-xxl grey.png';
import Heart from 'src/assets/images/heart-xxl.png';
import Plus from 'src/assets/images/plus-5-xxl.png';


const BookCard2 = () => (
  <div className="bookcard">
    <div className="bookcard__infos">
      <Link to="/livre/978-2221247884">
        <img className="bookcard__infos__cover" src="https://static.fnac-static.com/multimedia/Images/FR/NR/03/c2/bb/12304899/1507-1/tsp20200905071037/Toujours-plus.jpg" alt="" />
      </Link>
      <span className="bookcard__infos__title">toujours plus</span>
      <span className="bookcard__infos__author">Lena situations</span>
      <div className="bookcard__infos__rating">
        <img className="bookcard__infos__rating__point" src={GreenBook} alt="" />
        <img className="bookcard__infos__rating__point" src={GreenBook} alt="" />
        <img className="bookcard__infos__rating__point" src={GreyBook} alt="" />
        <img className="bookcard__infos__rating__point" src={GreyBook} alt="" />
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

export default BookCard2;
