import React from 'react';
import { Link } from 'react-router-dom';

import GreenBook from 'src/assets/images/book-xxl green.png';
import GreyBook from 'src/assets/images/book-xxl grey.png';

/* import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { dom } from '@fortawesome/fontawesome-svg-core'; */

import Rating from 'src/components/Rating';
import LivreAvis from 'src/components/Livre/LivreAvis';
import LivreCritique from 'src/components/Livre/LivreCritique';

import './styles.scss';

const LivreEnsembleAvis = ({ avis, critiques }) => {
  console.log('ensemble critiques', critiques);
  const livreEnsembleAvis = avis.length ? (
    avis.map((avi) => (
      <LivreAvis avi={avi} />
    ))
  ) : (
    <p>Devenez le premier à donner votre avis ! </p>
  );

  const livreEnsembleCritiques = critiques.length ? (
    critiques.map((critique) => (
      <LivreCritique critique={critique} />
    ))
  ) : (
    <p>Devenez le premier à rediger une critique ! </p>
  );

  return (
    <div className="livreensemble">
    <div className="livreensemble__avis">
      <h1 className="livreensemble__avis__title">Les avis de nos lecteurs</h1>
      <div className="livreensemble__avis__position">
        <div className="livreensemble__avis__position__avis">
          {livreEnsembleAvis}
        </div>
        <div className="livreensemble__avis__position__formulaire">
          <form action="" method="post">
            <div className="livreensemble__avis__position__formulaire__elements">
              <div className="livreensemble__avis__position__formulaire__elements__msg">
                <label htmlFor="msg" />
                <textarea className="livreensemble__avis__position__formulaire__elements__msg__textarea" name="user_msg" id="msg" cols="42" rows="3" placeholder=" Donnez votre avis sur ce livre" />
              </div>
              <Rating value={3} />
            </div>
            <button className="livreensemble__avis__position__formulaire__elements__msg__button" type="submit">Envoyer</button>
          </form>
        </div>
      </div>
    </div>
    <div className="livreensemble__critiques">
      <h1 className="livreensemble__critiques__title">Les critiques de nos lecteurs</h1>
      <div className="livreensemble__critiques__position">
        <div className="livreensemble__critiques__position__avis">
          {livreEnsembleCritiques}
        </div>
        <div className="livreensemble__critiques__position__formulaire">
          <form action="" method="post">
            <div className="livreensemble__critiques__position__formulaire__elements">
              <Link to="/critiques">
                <button type="submit">Rédiger une critique</button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  );
};

export default LivreEnsembleAvis;
