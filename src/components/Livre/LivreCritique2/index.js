import React from 'react';
import { Link } from 'react-router-dom';

import profilepic from 'src/assets/images/Rectangle -42.png';
import rating from 'src/assets/images/Groupe 33.png';

import './styles.scss';

const LivreCritique = () => (
  <div className="livrecritique">
    <div className="livrecritique__user">
      <div className="livrecritique__user__infos">
        <img className="livrecritique__user__infos__profilepic" src={profilepic} alt="" />
        <div className="livrecritique__user__infos__details">
          <span className="livrecritique__user__infos__details__name">Benoit</span>
          <span className="livrecritique__user__infos__details__city">Paris (75)</span>
        </div>
      </div>
      <div className="livrecritique__user__rating">
        <p>9</p>
      </div>
    </div>
    <div className="livrecritique__texte">
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, soluta! Doloribus repellendus temporibus eos autem fugit praesentium nobis deserunt incidunt, ut nesciunt atque blanditiis voluptatibus velit alias inventore reprehenderit unde!
      Explicabo ab veritatis odit distinctio, illo vel porro cupiditate facilis itaque doloribus ullam similique? Ut consequatur necessitatibus esse? Fugit mollitia cupiditate eos magni, minima ut tenetur perspiciatis beatae voluptatibus provident!
      Veniam, porro molestiae. Soluta fugiat minima praesentium fuga sapiente laudantium atque. Quos magnam earum iure doloribus quisquam libero laboriosam distinctio explicabo est, quia eius ratione adipisci accusantium amet exercitationem ducimus.</p>
    </div>
    <Link to="/critiques">
      <p className="livrecritique__lien">Lire la suite</p>
    </Link>
  </div>
);

export default LivreCritique;
