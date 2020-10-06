import React from 'react';
import { Link } from 'react-router-dom';

import Heart from 'src/assets/images/heart-xxl.png';
import Plus from 'src/assets/images/plus-5-xxl.png';

const BookShelf = () => (
  <div className="bookshelf">
    <div className="bookshelf__infos">
      <Link to="/livre/275330145X">
        <img className="bookshelf__infos__cover" src="https://www.amazon.fr/images/I/41JqBo-xrrL._SX335_BO1,204,203,200_.jpg" alt="" />
      </Link>
      <span className="bookshelf__infos__title">Kaamelott</span>
      <span className="bookshelf__infos__author">Alexandre Astier</span>
    </div>
    <div className="bookshelf__icons">
      <Link>
        <img className="bookshelf__icons__heart" src={Heart} alt="" />
      </Link>
      <Link>
        <img className="bookshelf__icons__plus" src={Plus} alt="" />
      </Link>
    </div>
  </div>
);

export default BookShelf;
