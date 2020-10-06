import React from 'react';
import { Link } from 'react-router-dom';

import Logo from 'src/assets/images/Logo_Letagere.png';
import Nav from './Nav';
import SearchField from './SearchField';
import User from './User';

import './styles.scss';

const Header = () => (
  <div className="header">
    <Link key="accueil" to="/">
      <img src={Logo} className="header__logo" alt="Logo de l'étagere" />
    </Link>
    <Nav />
    <SearchField />
    <User />
  </div>
);

export default Header;
