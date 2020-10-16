import React from 'react';
import { Link } from 'react-router-dom';

import plume from 'src/assets/images/Icon awesome-feather-alt.png';

import './styles.scss';

const CritiqueFormLink = () => (
  <div className="critique-form-link">
    <Link to="/critiques/nouvellecritique">
      <div className="critique-form-link__container">
        <div className="critique-form-link__container__title">
            <h1 className="critique-form-link__container__title__black">Vous souhaitez poster</h1>
            <h1 >une nouvelle critique</h1>
        </div>
        <img className="critique-form-link__container__icon" src={plume} alt="icone réprésentant une plume" />
        <div className="presentation__icones__critiques__text">
          <p className="presentation__icones__critiques__white">Cliquez ici</p>
        </div>
      </div>
    </Link>
  </div>
);

export default CritiqueFormLink;
 