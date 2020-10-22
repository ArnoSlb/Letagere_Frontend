import React from 'react';
import { Link } from 'react-router-dom';

import profilepic from 'src/assets/images/Rectangle -29.png';
import rating from 'src/assets/images/Groupe 33.png';

import './styles.scss';

const LivreCritique = ({ critique }) => {
  // console.log('Livre critique', critique);
  return (
    <div className="livrecritique">
    <div className="livrecritique__user">
      <div className="livrecritique__user__infos">
        <img className="livrecritique__user__infos__profilepic" src={profilepic} alt="" />
        <div className="livrecritique__user__infos__details">
          <span className="livrecritique__user__infos__details__name">{critique.userId.nickname}</span>
          <span className="livrecritique__user__infos__details__city">Rennes (35)</span>
        </div>
      </div>
      <div className="livrecritique__user__rating">
        <p>{critique.note}</p>
      </div>
    </div>
    <div className="livrecritique__texte">
      <h1>{critique.title}</h1>
      <p>{critique.body}</p>
    </div>
    <Link to="/critiques">
      <p className="livrecritique__lien">Lire la suite</p>
    </Link>
  </div>
  );
};

export default LivreCritique;
