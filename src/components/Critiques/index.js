import React from 'react';

import CritiqueDeLaSemaine from 'src/components/Critiques/CritiqueDeLaSemaine';
import CritiqueFormLink from 'src/components/Critiques/CritiqueFormLink';
import CritiquePresse from 'src/components/Critiques/CritiquePresse';

import './styles.scss';

const Critiques = () => (
  <div className="critiques">
    <CritiqueDeLaSemaine />
    <div className="critiques__form-et-presse">
      <CritiqueFormLink />
      <CritiquePresse />
    </div>
  </div>
);

export default Critiques;
