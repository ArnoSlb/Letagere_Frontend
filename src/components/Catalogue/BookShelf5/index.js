import React from 'react';
import { Link } from 'react-router-dom';

import Heart from 'src/assets/images/heart-xxl.png';
import Plus from 'src/assets/images/plus-5-xxl.png';

const BookShelf = () => (
  <div className="bookshelf">
    <div className="bookshelf__infos">
      <Link to="/livre/286374481X">
        <img className="bookshelf__infos__cover" src="https://www.amazon.fr/images/I/51-3s7X-3RL.jpg" alt="" />
      </Link>
      <span className="bookshelf__infos__title">La cerise sur le gateau</span>
      <span className="bookshelf__infos__author">Aurélie Valognes</span>
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
