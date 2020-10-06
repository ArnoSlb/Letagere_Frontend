/* eslint-disable class-methods-use-this */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-lone-blocks */
import React, { Component } from 'react';
import { Link, Redirect, withRouter } from 'react-router-dom';

import AuthService from 'src/components/ModalLogin/Auth/AuthService';
import UserLogo from 'src/assets/images/Icon awesome-user-alt.png';

import './styles.scss';

const Auth = new AuthService();

let Profile = '';
{ Auth.loggedIn() ? Profile = Auth.getProfile() : Profile = ''; }
// console.log(Profile);

class ModalDashboard extends Component {
  handleLogout() {
    Auth.logout();
      <Redirect to="/connexion" />;
  }

  handleLogin() {
    Auth.login();
      <Redirect to="/" />;
  }

  render() {
    return (

      Auth.loggedIn()

        ? (
          <div className="modaldashboard">
            <div className="modaldashboard__swanky">
              <div className="modaldashboard__swanky__wrapper">
                <input className="modaldashboard__swanky__wrapper__input" type="radio" name="radio" id="ModalDashboard" />
                <label className="modaldashboard__swanky__wrapper__label" htmlFor="ModalDashboard">
                  <span className="modaldashboard__username">Bienvenue {Profile.nickname}</span>
                  <div className="modaldashboard__lil_arrow" />
                  <div className="modaldashboard__bar" />
                  <div className="modaldashboard__swanky__wrapper__content">
                    <ul>
                      <Link to="/mon-profil">
                        <li className="modaldashboard__li">Mon profil</li>
                      </Link>
                      <Link to="/ma-bibliothèque">
                        <li className="modaldashboard__li">Ma Bibliothèque</li>
                      </Link>
                      <Link to="ma_liste-de-souhaits">
                        <li className="modaldashboard__li">Ma Liste de Souhaits</li>
                      </Link>
                      <Link to="mes-critiques">
                        <li className="modaldashboard__li">Mes Critiques</li>
                      </Link>
                      <Link to="mes-offres">
                        <li className="modaldashboard__li">Mes Offres</li>
                      </Link>
                      <Link to="mes-demandes">
                        <li className="modaldashboard__li">Mes demandes</li>
                      </Link>
                      <Link to="parametres">
                        <li className="modaldashboard__li">Paramètres</li>
                      </Link>
                      <Link to="/connexion">
                        <li className="modaldashboard__li" onClick={this.handleLogout.bind(this)}>Se déconnecter</li>
                      </Link>

                    </ul>
                  </div>
                </label>
              </div>
            </div>
          </div>
        )

        : (
          <div className="user">
            <Link to="/connexion">
              <span className="user__connect">Se connecter</span>
              <img className="user__icon" src={UserLogo} alt="Logo de l'utilisateur" />
            </Link>
          </div>
        )

    );
  }
}

export default withRouter(ModalDashboard);
