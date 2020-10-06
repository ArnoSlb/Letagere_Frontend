import React from 'react';
import { Link } from 'react-router-dom';

import firstCover from 'src/assets/images/uneviechoisie.jpg';
import GreenBook from 'src/assets/images/book-xxl green.png';
import GreyBook from 'src/assets/images/book-xxl grey.png';
import Heart from 'src/assets/images/heart-xxl.png';
import Plus from 'src/assets/images/plus-5-xxl.png';


const BookCard3 = () => (
  <div className="bookcard">
    <div className="bookcard__infos">
      <Link to="/livre/2505110778, 9782505110774">
        <img className="bookcard__infos__cover" src="http://books.google.com/books/content?id=jzJyDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api" alt="" />
      </Link>
      <span className="bookcard__infos__title">charlie</span>
      <span className="bookcard__infos__author">Stephen King</span>
      <div className="bookcard__infos__rating">
        <img className="bookcard__infos__rating__point" src={GreenBook} alt="" />
        <img className="bookcard__infos__rating__point" src={GreenBook} alt="" />
        <img className="bookcard__infos__rating__point" src={GreenBook} alt="" />
        <img className="bookcard__infos__rating__point" src={GreenBook} alt="" />
        <img className="bookcard__infos__rating__point" src={GreenBook} alt="" />
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

export default BookCard3;
