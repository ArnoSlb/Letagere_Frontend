/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import { Link } from 'react-router-dom';
import AddToLibrary from 'src/components/AddTo/AddToLibrary';
import AddToWish from 'src/components/AddTo/AddToWish';

import firstCover from 'src/assets/images/uneviechoisie.jpg';
import Heart from 'src/assets/images/heart-xxl.png';
import Plus from 'src/assets/images/plus-5-xxl.png';
import GreenBook from 'src/assets/images/book-xxl green.png';
import GreyBook from 'src/assets/images/book-xxl grey.png';
import Feather from 'src/assets/images/feather-xxl.png';
import Vinci from 'src/assets/images/Leonard-de-Vinci-La-biographie.jpg';
import Didier from 'src/assets/images/didier.png';

import './styles.scss';

const TopOfWeek = ({ heart }) => {
  // console.log('TopOfWeek', heart);
  const selections = heart.length ? (
    heart.map((heartBook) => {
      const author = heartBook.authors.[0];
      const firstAuthor = author.authorId.name;
      const lien2 = heartBook.ISBN;
      const lien1 = '/livre/';
      const lien = lien1 + lien2;
      const AddTo = new AddToLibrary();
      const AddToW = new AddToWish();

      return (
        <div className="topofweek__book" key={heartBook.id}>
          <div className="topofweek__book--info">
            <div className="book-container">
              <Link className="book" to={lien}>
                <img className="topofweek__cover" src={heartBook.cover} alt="Couverture de livre" />
              </Link>
            </div>
            <Link to={lien}>
              <p className="topofweek__book--name">{heartBook.title}</p>
            </Link>
            <p className="topofweek__book--author">{firstAuthor}</p>
            <div className="topofweek__book--icons">
              <img className="topofweek__book--icon" src={GreenBook} alt="" />
              <img className="topofweek__book--icon" src={GreenBook} alt="" />
              <img className="topofweek__book--icon" src={GreenBook} alt="" />
              <img className="topofweek__book--icon" src={GreenBook} alt="" />
              <img className="topofweek__book--icon" src={GreyBook} alt="" />
            </div>
          </div>
          <div className="topofweek__icons">
            <Link to="">
              <img className="topofweek__icon" src={Plus} alt="" onClick={AddToW.handleOnClick} id={heartBook.ISBN} />
            </Link>
            <Link to="">
              <img className="topofweek__icon" src={Heart} alt="" onClick={AddTo.handleOnClick} id={heartBook.ISBN} />
            </Link>
          </div>
        </div>
      );
    })
  ) : (
    <p>Pas de selection cette semaine</p>
  );

  return (
    <div className="topofweek">
      <div className="topofweek__like">
        <h1 className="topofweek__like--title">Les coups de <span className="topofweek__like--title--heart">&#9829;</span> de la semaine</h1>
        <div className="topofweek__like__container">
          {selections}
        </div>
      </div>
      <div className="topofweek__critical">
        <h1 className="topofweek__critical--title">La critique de la semaine   <img className="topofweek__critical--feather" src={Feather} alt="" /> </h1>
        <div className="topofweek__critical--post">
          <div className="topofweek__critical--header">
            <div className="topofweek__critical--author">
              <img className="topofweek__critical--author--picture" src={Didier} alt="" />
              <div className="topofweek__critical--author--infos">
                <p className="topofweek__critical--author--name">Didier</p>
                <p className="topofweek__critical--date">20 Avril 2020</p>
              </div>
            </div>
            <span className="topofweek__critical--rating">8</span>
          </div>

          <div className="topofweek__critical--content">
            <p className="topofweek__critical--text">Une biographie fascinante par un spécialiste qui a fait ses preuves avec des publications précédentes, en particulier Steve Jobs. Ce Léonard de Vinci est passionnant tant par l'écriture fluide, les sources de références et l'interprétation objective d'un personnage hors du commun pour qui le qualificatif de génie en est la représentation vivante. le terme latin genius définit bien ce créateur, novateur, inventeur, mais il faut ajouter que Léonard avait plus d'un don. Avant tout, un être curieux, qui veux tout comprendre avec une curiosité d'enfant qu'il gardera jusqu'à sa mort, et cela en étant autodidacte. L'ouvrage disecte avec précision les oeuvres principales nous permettant de mieux appréhender la lecture des tableaux du maître. Mais les créations de Léonard sont loin de se limiter à la peinture. L'auteur nous explique en détails les relations de l'artiste avec ses protecteurs d'un Medicis au François 1er pour lesquels il met à exécution ses talents d'ingénieur, d'imprésario et homme de spectacle, de chirurgien anatomiste. Cette biographie, un voyage dans le monde des humanités, des arts, des sciences et des états d'âme.
              Je conseille de lire le texte sur sa liseuse mais pour profiter de la qualité des excellentes reproductions couleurs de visionner les illustrations sur ordinateur (28" idéalement) ou tablette via Calibre.
            </p>
            <p><a href="#" className="topofweek__critical__plus">Voir plus</a></p>
          </div>
        </div>
        <div className="topofweek__critical--book">
          <img className="topofweek__critical--book--cover" src={Vinci} alt="" />
          <p className="topofweek__critical--book--title">Leonard de Vinci</p>
          <p className="topofweek__critical--book--author">Walter Isaacson</p>
        </div>

      </div>
    </div>
  );
};

export default TopOfWeek;
