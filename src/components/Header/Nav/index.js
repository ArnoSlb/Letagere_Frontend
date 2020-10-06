import React from 'react';
import { Link } from 'react-router-dom';

import './styles.scss';

const Nav = () => (

  <nav className="nav">
    <ul className="nav__ul">
      <li className="nav__li">
        <Link to="/">Accueil</Link>
      </li>
      <li className="nav__li">
        <Link to="/catalogue">Catalogue</Link>
      </li>
      <li className="nav__li">
        <Link to="/critiques">Critiques</Link>
      </li>
      <li className="nav__li">
        <Link to="/offres">Offres</Link>
      </li>
    </ul>
  </nav>

);

export default Nav;
