import React from 'react';
import eva from 'src/assets/images/Groupe 30.png';
import biblio from 'src/assets/images/Icon metro-books.png';
import avis from 'src/assets/images/Groupe 36.png';
import plume from 'src/assets/images/Icon awesome-feather-alt.png';

import './styles.scss';

const Presentation = () => (
  <div className="presentation">
    <div className="presentation__title">
      <h1 className="presentation__title__white">Bienvenue sur </h1>
      <h1 className="presentation__title__black">l'étagère</h1>
    </div>
    <h2>Le site pour échanger, acheter, vendre et parler livres</h2>
    <div className="presentation__icones">
      <div className="presentation__icones__eva">
        <img src={eva} alt="icone représentant un groupe de personnes autour d'un même endroit" />
        <p className="presentation__icones__eva__white">Echangez, vendez, achetez</p>
        <p>Près de chez vous</p>
      </div>
      <div className="presentation__icones__biblio">
        <img src={biblio} alt="icone reprensentant plusieurs livres" />
        <p className="presentation__icones__biblio__white">créez votre</p>
        <p>biliothèque</p>
      </div>
      <div className="presentation__icones__avis">
        <img src={avis} alt="icone representant un systeme de notation" />
        <div className="presentation__icones__avis__text">
          <p className="presentation__icones__avis__white">Donnez</p>
          <p>votre avis</p>
        </div>
      </div>
      <div className="presentation__icones__critiques">
        <img src={plume} alt="icone réprésentant une plume" />
        <div className="presentation__icones__critiques__text">
          <p className="presentation__icones__critiques__white">Ecrivez</p>
          <p>des critiques</p>
        </div>
      </div>
    </div>
  </div>
);

export default Presentation;
