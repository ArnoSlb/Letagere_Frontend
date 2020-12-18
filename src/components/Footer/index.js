import React from 'react';
import { Link } from 'react-router-dom';

import './styles.scss';

const Footer = () => (
  <div className="footer">
    <div className="footer__container">
      <p className="footer__copyright">© L'étagère 2020 - Tous droits réservés</p>
      <ul className="footer__ul">
        <Link to="/qui-sommes-nous" className="footer__link">
          <li className="footer__li">Qui Sommes-nous ?</li>
        </Link>
        <Link to="/engagements" className="footer__link">
          <li className="footer__li">Nos Engagements</li>
        </Link>
        <Link to="/contacts" className="footer__link">
          <li className="footer__li">Nous Contacter</li>
        </Link>
        <Link to="/contacts" className="footer__link">
          <li className="footer__li">Mentions Légales</li>
        </Link>
        <Link to="/cookies" className="footer__link">
          <li className="footer__li">Cookies</li>
        </Link>
      </ul>
    </div>
  </div>
);

export default Footer;
