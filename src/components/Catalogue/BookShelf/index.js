import React from 'react';
import { Link } from 'react-router-dom';
import AddToLibrary from 'src/components/AddTo/AddToLibrary';
import AddToWish from 'src/components/AddTo/AddToWish';

import Heart from 'src/assets/images/heart-xxl.png';
import Plus from 'src/assets/images/plus-5-xxl.png';

import './styles.scss';

const BookShelf = ({ livre }) => {
  const author = livre.authors.[0];
  const firstAuthor = author.authorId.name;
  const lien2 = livre.ISBN;
  const lien1 = '/livre/';
  const lien = lien1 + lien2;

  const AddTo = new AddToLibrary();
  const AddToW = new AddToWish();

  return (
    <div className="bookshelf" >
      <div className="bookshelf__infos">
        <a href={lien} className="bookshelf__link">
          <img className="bookshelf__infos__cover" src={livre.cover} alt="" />
        </a>
        <span className="bookshelf__infos__title">{livre.title}</span>
        <span className="bookshelf__infos__author">{firstAuthor}</span>
      </div>
      <div className="bookshelf__icons">
        <Link to="">
          <img className="bookshelf__icons__heart" src={Heart} alt="" onClick={AddToW.handleOnClick} id={livre.ISBN}  />
        </Link>
        <Link to="">
          <img className="bookshelf__icons__plus" src={Plus} alt="" onClick={AddTo.handleOnClick} id={livre.ISBN} />
        </Link>
      </div>
    </div>
  );
};

export default BookShelf;
