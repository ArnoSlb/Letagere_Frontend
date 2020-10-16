import React from 'react';

import CritiqueDeLaSemaine from 'src/components/Critiques/CritiqueDeLaSemaine';
import CritiqueFormLink from 'src/components/Critiques/CritiqueFormLink';

import './styles.scss';

const Critiques = () => (
  <div className="critiques">
    <CritiqueDeLaSemaine />
    <CritiqueFormLink />
  </div>
);

export default Critiques;
