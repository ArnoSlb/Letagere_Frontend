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
        <img className="bookcard__infos__cover" src="https://images-na.ssl-images-amazon.com/images/I/91jJBuGxn4L.jpg" alt="" />
      </Link>
      <span className="bookcard__infos__title">le cri du moloch</span>
      <span className="bookcard__infos__author">Jean Dufaux</span>
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

export default BookCard3;
