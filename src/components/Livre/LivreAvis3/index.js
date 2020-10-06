import React from 'react';

import profilepic from 'src/assets/images/Rectangle -47.png';
import rating from 'src/assets/images/Groupe 33.png';

const LivreAvis = () => (
  <div className="livreavis">
    <div className="livreavis__user">
      <div className="livreavis__user__infos">
        <img className="livreavis__user__infos__profilepic" src={profilepic} alt="" />
        <div className="livreavis__user__infos__details">
          <span className="livreavis__user__infos__details__name">Ajay</span>
          <span className="livreavis__user__infos__details__city">Strasbourg (67)</span>
        </div>
      </div>
      <div className="livreavis__user__rating">
        <img src={rating} alt=""/>
      </div>
    </div>
    <div className="livreavis__texte">
      <p> Je suis fan de cet auteur. 0n est jamais déçu.</p>
    </div>
  </div>
);

export default LivreAvis;
