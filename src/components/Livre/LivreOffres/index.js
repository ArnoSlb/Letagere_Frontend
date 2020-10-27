import React from 'react';

import LivreOffreDetails from 'src/components/Livre/LivreOffreDetails';
import LivreOffreDetails1 from 'src/components/Livre/LivreOffreDetails1';
import arrow from 'src/assets/images/arrow-88-128.png';

import PropTypes from 'prop-types';

import './styles.scss';

const LivreOffres = ({ livre }) => (

  <div className="livreoffres">
    <div className="livreoffres__frame">
      <h1 className="livreoffres__frame__title">Les offres avec ce livre</h1>
      <div className="livreoffres__frame__position">
        {/* <img className="livreoffres__frame__position__flechegauche" src={arrow} alt="" /> */}
        <div className="livreoffres__frame__position__offres">
          <LivreOffreDetails livre={livre} />
          <LivreOffreDetails1 livre={livre} />
        </div>
        {/* <img className="livreoffres__frame__position__flechedroite" src={arrow} alt="" /> */}
      </div>
    </div>

  </div>
);

LivreOffreDetails.propTypes = {
  livre: PropTypes.object.isRequired,
};

export default LivreOffres;
