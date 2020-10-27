import React from 'react';

import profilepic from 'src/assets/images/Rectangle -2.png';
import rating from 'src/assets/images/Groupe 33.png';

import './styles.scss';

const LivreAvis = ({ avi }) => {
  // console.log('avi', avi);

  return (
    <div className="livreavis">
    <div className="livreavis__user">
      <div className="livreavis__user__infos">
        <img className="livreavis__user__infos__profilepic" src={profilepic} alt="" />
        <div className="livreavis__user__infos__details">
  <span className="livreavis__user__infos__details__name">{avi.userId.nickname}</span>
          <span className="livreavis__user__infos__details__city">Nantes (44)</span>
        </div>
      </div>
      <div className="livreavis__user__rating">
        {/* <img src={rating} alt="" /> */}
        <p>Note: {avi.rating} </p>
      </div>
    </div>
    <div className="livreavis__texte">
      <p>{avi.text}</p>
    </div>
  </div>
  );
};

export default LivreAvis;
