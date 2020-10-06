import React from 'react';
import PropTypes from 'prop-types';

import plus from 'src/assets/images/plus-5-xxl.png';
import heart from 'src/assets/images/heart-xxl.png';
import rating from 'src/assets/images/Groupe 33.png';
import profilepic from 'src/assets/images/Rectangle -3.png';

import './styles.scss';

const LivreOffreDetails1 = ({ livre}) => {
  const author = livre.authors.[0];
  const firstAuthor = author.authorId.name;
  // console.log(data);

  return (
    <div className="livreoffredetails1">
      <div className="livreoffredetails1__icons">
        <a href="#"><img src={plus} alt="" /> </a>
        <a href="#"><img src={heart} alt="" /> </a>
      </div>
      <a href="#"><img className="livreoffredetails1__book" src={livre.cover} alt="" /></a>
      <div className="livreoffredetails1__infos">
        <div className="livreoffredetails1__infos__user">
          <img className="livreoffredetails1__infos__user__profilepic" src={profilepic} alt="" />
          <span className="livreoffredetails1__infos__user__name">Stephanie</span>
          <span className="livreoffredetails1__infos__user__city">Lille (59)</span>
        </div>
        <div className="livreoffredetails1__infos__book">
          <span className="livreoffredetails1__infos__book__title">{livre.title}</span>
          <span className="livreoffredetails1__infos__book__author">{firstAuthor}</span>
          <img className="livreoffredetails1__infos__book__rating" src={rating} alt="" />
        </div>
        <div className="livreoffredetails1__infos__price">
          <span>13,99€</span>
        </div>
        <a className="livreoffredetails1__infos__interest" href="#">Ça m'intéresse</a>
      </div>
    </div>
  );

};

LivreOffreDetails1.propTypes = {
  slug: PropTypes.string.isRequired,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      ISBN: PropTypes.string.isRequired,
      titre: PropTypes.string.isRequired,
      auteur: PropTypes.string.isRequired,
      dateDeParution: PropTypes.string.isRequired,
      editeur: PropTypes.string.isRequired,
      collection: PropTypes.string.isRequired,
      img: PropTypes.string.isRequired,
      resume: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default LivreOffreDetails1;
