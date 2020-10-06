import React from 'react';

import profilepic from 'src/assets/images/Rectangle -38.png';
import rating from 'src/assets/images/Groupe 33.png';

const LivreAvis = () => (
  <div className="livreavis">
    <div className="livreavis__user">
      <div className="livreavis__user__infos">
        <img className="livreavis__user__infos__profilepic" src={profilepic} alt="" />
        <div className="livreavis__user__infos__details">
          <span className="livreavis__user__infos__details__name">Claire</span>
          <span className="livreavis__user__infos__details__city">Angers (49)</span>
        </div>
      </div>
      <div className="livreavis__user__rating">
        <img src={rating} alt=""/>
      </div>
    </div>
    <div className="livreavis__texte">
      <p>Un livre facile à lire qui permet de décompresser de la formation O'Clock. Romain devrait le lire plutot que de faire des parties Skribbl à dessiner Johnny Hallyday. C'est que mon avis...</p>
    </div>
  </div>
);

export default LivreAvis;
