import React from 'react';
import PropTypes from 'prop-types';
import { Link, Redirect, withRouter } from 'react-router-dom';

/* import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { dom } from '@fortawesome/fontawesome-svg-core'; */

import AuthService from 'src/components/ModalLogin/Auth/AuthService';
import Rating from 'src/components/Rating';
import LivreAvis from 'src/components/Livre/LivreAvis';
import LivreCritique from 'src/components/Livre/LivreCritique';

import './styles.scss';

const LivreEnsembleAvis = ({
  avis, critiques, sendMessage, slug, inputValue, setNewMessageContent,
}) => {
  // console.log('ensemble critiques', critiques);

  const livreEnsembleAvis = avis.length ? (
    avis.map((avi) => (
      <LivreAvis avi={avi} key={avi.text} />
    ))
  ) : (
    <p>Devenez le premier à donner votre avis ! </p>
  );

  const livreEnsembleCritiques = critiques.length ? (
    critiques.map((critique) => (
      <LivreCritique critique={critique} key={critique.body} />
    ))
  ) : (
    <p>Devenez le premier à rediger une critique ! </p>
  );

  const Auth = new AuthService();
  let Profile = 'Se connecter';
  { Auth.loggedIn() ? Profile = Auth.getProfile() : Profile = 'Se connecter'; }

  const handleOnSubmit = (event) => {
    event.preventDefault();
    if (Auth.loggedIn()) {
      console.log('connecté');
      sendMessage(inputValue);
    }
    else {
      console.log('pas connecté');
      <Redirect push to="/connexion" />;
      alert(`Vous devez être connecté pour poster un commentaire`);
    }
  };

  const handleOnChange = (event) => {
    setNewMessageContent(event.target.value);
  };

  // console.log(Profile);

  return (
    <div className="livreensemble">
      <div className="livreensemble__avis">
        <h1 className="livreensemble__avis__title">Les avis de nos lecteurs</h1>
        <div className="livreensemble__avis__position">
          <div className="livreensemble__avis__position__avis">
            {livreEnsembleAvis}
          </div>
          <div className="livreensemble__avis__position__formulaire">
            <form onSubmit={handleOnSubmit}>
              <div className="livreensemble__avis__position__formulaire__elements">
                <div className="livreensemble__avis__position__formulaire__elements__msg">
                  <input
                    type="text"
                    value={inputValue}
                    onChange={handleOnChange}
                    className="livreensemble__avis__position__formulaire__elements__msg__textarea"
                    name="user_msg"
                    id="msg"
                    placeholder=" Donnez votre avis sur ce livre"
                  />
                </div>
                <div className="livreensemble__avis__position__formulaire__elements__note">
                  <Rating value={3} />
                </div>
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

LivreEnsembleAvis.propTypes = {
  avis: PropTypes.array.isRequired,
  critiques: PropTypes.array.isRequired,
  sendMessage: PropTypes.func.isRequired,
  slug: PropTypes.string.isRequired,
  inputValue: PropTypes.string.isRequired,
  setNewMessageContent: PropTypes.func.isRequired,
};

export default withRouter(LivreEnsembleAvis);
