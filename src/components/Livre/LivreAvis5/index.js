import React from 'react';

import profilepic from 'src/assets/images/Rectangle -29.png';
import rating from 'src/assets/images/Groupe 33.png';

const LivreAvis = () => (
  <div className="livreavis">
    <div className="livreavis__user">
      <div className="livreavis__user__infos">
        <img className="livreavis__user__infos__profilepic" src={profilepic} alt="" />
        <div className="livreavis__user__infos__details">
          <span className="livreavis__user__infos__details__name">Camille</span>
          <span className="livreavis__user__infos__details__city">Rennes (35)</span>
        </div>
      </div>
      <div className="livreavis__user__rating">
        <img src={rating} alt=""/>
      </div>
    </div>
    <div className="livreavis__texte">
      <p> Le livre est bien mais je suis quand même un peu déçu, je m'attendais à mieux.</p>
    </div>
  </div>
);

export default LivreAvis;
