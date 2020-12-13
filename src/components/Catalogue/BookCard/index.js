import React from 'react';
import { Link } from 'react-router-dom';
import AddToLibrary from 'src/components/AddTo/AddToLibrary';
import AddToWish from 'src/components/AddTo/AddToWish';

import firstCover from 'src/assets/images/uneviechoisie.jpg';
import GreenBook from 'src/assets/images/book-xxl green.png';
import GreyBook from 'src/assets/images/book-xxl grey.png';
import Heart from 'src/assets/images/heart-xxl.png';
import Plus from 'src/assets/images/plus-5-xxl.png';

import './styles.scss';

const BookCard = ({ livre }) => {
  const author = livre.authors.[0];
  const firstAuthor = author.authorId.name;
  const lien2 = livre.ISBN;
  const lien1 = '/livre/';
  const lien = lien1 + lien2;

  const AddTo = new AddToLibrary();
  const AddToW = new AddToWish();

  return (
    <div className="bookcard">
      <div className="bookcard__infos">
        <div className="bookcard__infos__cover__icons">
          <a href={lien}>
            <img className="bookcard__infos__cover" src={livre.cover} alt="" />
          </a>
          <div className="bookcard__icons">
            <a>
              <img className="bookcard__icons__heart" src={Heart} alt="" onClick={AddToW.handleOnClick} id={livre.ISBN} />
            </a>
            <a>
              <img className="bookcard__icons__plus" src={Plus} alt=""  onClick={AddTo.handleOnClick} id={livre.ISBN} />
            </a>
          </div>
        </div>
        <span className="bookcard__infos__title">{livre.title}</span>
        <span className="bookcard__infos__author">{firstAuthor}</span>
        <div className="bookcard__infos__rating">
          <img className="bookcard__infos__rating__point" src={GreenBook} alt="" />
          <img className="bookcard__infos__rating__point" src={GreenBook} alt="" />
          <img className="bookcard__infos__rating__point" src={GreenBook} alt="" />
          <img className="bookcard__infos__rating__point" src={GreenBook} alt="" />
          <img className="bookcard__infos__rating__point" src={GreyBook} alt="" />
        </div>
      </div>
    </div>
  );
};

export default BookCard;
