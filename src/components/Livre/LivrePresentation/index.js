/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import React from 'react';
import PropTypes from 'prop-types';
import { Link, useParams } from 'react-router-dom';
import AddToLibrary from 'src/components/AddTo/AddToLibrary';

import note4 from 'src/assets/images/rating/Groupe 34.png';

import './styles.scss';

const AddTo = new AddToLibrary();

const LivrePresentation = ({ livre }) => {
  // console.log('LivrePresentation', livre);
  const authorsList = livre.authors;
  console.log(authorsList);
  const authors = authorsList.length ? (
    authorsList.map((authorBook) => (
      <span className="livrePresentation__infos__details__ADECR__AD__authors__name">{authorBook.authorId.name}</span>
    ))
  ) : (
    <p>Auteur inconnu</p>
  );
  console.log(authors);

  const categoriesList = livre.categories;
  const category = categoriesList.length ? (
    categoriesList.map((categorie) => (
      <span className="livrePresentation__infos__details__ADECR__AD__category">{categorie.categoryId.name}</span>
    ))
  ) : (
    <p>ND</p>
  );
  console.log(category);

  return (
    <div className="livrePresentation">
      <div className="livrePresentation__infos">
        <img className="livrePresentation__infos__couverture" src={livre.cover} alt="" />
        <div className="livrePresentation__infos__details">
          <div className="livrePresentation__infos__details__titre">
            <h1>{livre.title}</h1>
            <img src={note4} alt="" />
          </div>
          <div className="livrePresentation__infos__details__ADECIR">
            <div className="livrePresentation__infos__details__ADECR__AD">
              <span className="textbold">Auteur : </span>
              <div className="livrePresentation__infos__details__ADECR__AD__authors">
                {authors}
              </div>
            </div>
            <div className="livrePresentation__infos__details__ADECR__AD">
              <span className="textbold">Catégorie : </span>
              <div className="livrePresentation__infos__details__ADECR__AD__category">
                {category}
              </div>
            </div>
            <div className="livrePresentation__infos__details__ADECR__EC">
              <div>
                <span className="textbold">Editeur : </span>
                <span>{livre.publisher.name} </span>
              </div>
              <div>
                <span className="textbold">ISBN : </span>
                <span>{livre.ISBN}</span>
              </div>
            </div>
            <div className="livrePresentation__infos__details__ADECR__I">
              <Link>
                <div onClick={AddTo.handleOnClick} id={livre.ISBN}>Ajouter à mes livres</div>
              </Link>
              <Link to="/connexion">
                <div>Écrire une critique</div>
              </Link>
              <Link to="/connexion">
                <div>Partager</div>
              </Link>
            </div>
            <div className="livrePresentation__infos__details__ADECIR">
              <p className="textbold">Resumé :</p>
              <p className="resume">
                {livre.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

LivrePresentation.propTypes = {

};

export default LivrePresentation;
