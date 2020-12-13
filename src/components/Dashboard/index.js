/* eslint-disable class-methods-use-this */
/* eslint-disable no-console */
/* eslint-disable no-lone-blocks */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
import React, { Component } from 'react';
import axios from 'axios';
import Library from 'src/containers/MyLibrary';
import MyWish from 'src/containers/MyWish';
import AuthService from 'src/components/ModalLogin/Auth/AuthService';
import Didier from 'src/assets/images/Icon awesome-user-alt.png';
import PositionIcon from 'src/assets/images/map-marker-2-xxl.png';
import Marcel from 'src/assets/images/marcel.png';
import Kevin from 'src/assets/images/kevin.png';
import Julie from 'src/assets/images/julie.png';

import './styles.scss';
import { render } from 'react-dom';

const Auth = new AuthService();
let Profile = 'Se connecter';
{ Auth.loggedIn() ? Profile = Auth.getProfile() : Profile = 'Se connecter'; }

// console.log(Profile);

const Dashboard = () => (
  <div className="dashboard">

    <div className="dashboard__user-informations-container">
      <div className="dashboard__user-informations">
        <img className="dashboard__user-picture" src={Didier} alt="" />
        <div className="dashboard__user-detail">
          <div className="dashboard__user-name-city">
            <h2 className="dashboard__user-name">{ Auth.loggedIn() ? Profile.nickname : 'Didier'}</h2>
            <p className="dashboard__user-city"><img className="dashboard__user-position-icon" src={PositionIcon} alt="" /> Nantes, France</p>
          </div>
          <div className="dashboard__numbers">
            <div className="dashboard__number-container">
              <p className="dashboard__number-element">Livres Lu</p>
              <p className="dashboard__number">0</p>
            </div>
            <div className="dashboard__number-container">
              <p className="dashboard__number-element">Mes Livres</p>
              <p className="dashboard__number">0</p>
            </div>
            <div className="dashboard__number-container">
              <p className="dashboard__number-element">Critiques</p>
              <p className="dashboard__number">0</p>
            </div>
            <div className="dashboard__number-container">
              <p className="dashboard__number-element">Offres en cours</p>
              <p className="dashboard__number">0</p>
            </div>
          </div>
        </div>
      </div>

      <div className="dashboard__user-presentation">
        <p className="dashboard__user-presentation-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
      </div>
    </div>

    <div className="dashboard__content-container">
      <div className="dashboard__mylibrary-mywishlist">
        <div className="dashboard__mylibrary">
          <h1 className="dashboard__mylibrary-title">Ma Bibliothèque</h1>
          <div className="dashboard__mylibrary-list"><Library /></div>
          <a href="#" className="dashboard__mylibrary-showmore-link">Voir plus</a>
        </div>
        <div className="dashboard__mywishlist">
          <h1 className="dashboard__mywishlist-title">Ma Liste de Souhaits</h1>
          <div className="dashboard__mywishlist-list">
            <MyWish />
          </div>
          <a href="#" className="dashboard__mywishlist-showmore-link">Voir plus</a>
        </div>
      </div>
    </div>
    <div className="dashboard__community-exchange-container">
      <div className="dashboard__community-exchange">
        <h1 className="dashboard__community-exchange-title">Mes demandes</h1>
        <div className="dashboard__community-exchange-myrequests">
          <div className="dashboard__community-exchange-myrequest">
            <div className="dashboard__community-exchange-myrequest-icon">
              <span className="dashboard__community-exchange-myrequest-icon-green">&#10003;</span>
            </div>
            <div className="dashboard__community-exchange-myrequest-infos">
              <h1 className="dashboard__community-exchange-myrequest-title">Une vie choisie</h1>
              <div className="dashboard__community-exchange-myrequest-seller">
                <div className="dashboard__community-exchange-myrequest-seller-name-picture">
                  <img src={Marcel} alt="" className="dashboard__community-exchange-myrequest-seller-picture" />
                  <p className="dashboard__community-exchange-myrequest-seller-name">Marcel</p>
                </div>
                <p className="dashboard__community-exchange-myrequest-seller-city">Dijon</p>
                <p className="dashboard__community-exchange-myrequest-seller-price">13.50€</p>
              </div>
            </div>
          </div>

          <div className="dashboard__community-exchange-myrequest">
            <div className="dashboard__community-exchange-myrequest-icon">
              <span className="dashboard__community-exchange-myrequest-icon-yellow">&#10561;</span>
            </div>
            <div className="dashboard__community-exchange-myrequest-infos">
              <h1 className="dashboard__community-exchange-myrequest-title">The Outstanding Developer</h1>
              <div className="dashboard__community-exchange-myrequest-seller">
                <div className="dashboard__community-exchange-myrequest-seller-name-picture">
                  <img src={Julie} alt="" className="dashboard__community-exchange-myrequest-seller-picture" />
                  <p className="dashboard__community-exchange-myrequest-seller-name">Julie</p>
                </div>
                <p className="dashboard__community-exchange-myrequest-seller-city">Tourcoing</p>
                <p className="dashboard__community-exchange-myrequest-seller-price">13.99€</p>
              </div>
            </div>
          </div>
        </div>
        <div className="dashboard__community-exchange-myrequest">
          <div className="dashboard__community-exchange-myrequest-icon">
            <span className="dashboard__community-exchange-myrequest-icon-red">&#10539;</span>
          </div>
          <div className="dashboard__community-exchange-myrequest-infos">
            <h1 className="dashboard__community-exchange-myrequest-title">Mutafukaz</h1>
            <div className="dashboard__community-exchange-myrequest-seller">
              <div className="dashboard__community-exchange-myrequest-seller-name-picture">
                <img src={Kevin} alt="" className="dashboard__community-exchange-myrequest-seller-picture" />
                <p className="dashboard__community-exchange-myrequest-seller-name">Kévin</p>
              </div>
              <p className="dashboard__community-exchange-myrequest-seller-city">Marseille</p>
              <p className="dashboard__community-exchange-myrequest-seller-price">24.00€</p>
            </div>
          </div>
        </div>

        <a className="dashboard__community-exchange-showmore">Voir toutes mes demandes</a>
      </div>

      <div className="dashboard__community-exchange">
        <h1 className="dashboard__community-exchange-title">Mes offres</h1>
        <div className="dashboard__community-exchange-myoffer">
          <div className="dashboard__community-exchange-myoffer-icon">
            <span className="dashboard__community-exchange-myoffer-icon-green">8</span>
          </div>
          <div className="dashboard__community-exchange-myoffer-infos">
            <h1 className="dashboard__community-exchange-myoffer-title">Martine apprend à coder</h1>
            <p className="dashboard__community-exchange-myoffer-author">Dario Spagnolo</p>
          </div>
          <p className="dashboard__community-exchange-myoffer-price">24.00€</p>
        </div>

        <div className="dashboard__community-exchange-myoffer">
          <div className="dashboard__community-exchange-myoffer-icon">
            <span className="dashboard__community-exchange-myoffer-icon-green">4</span>
          </div>
          <div className="dashboard__community-exchange-myoffer-infos">
            <h1 className="dashboard__community-exchange-myoffer-title">Kaamelott</h1>
            <p className="dashboard__community-exchange-myoffer-author">Alexandre Astier</p>
          </div>
          <p className="dashboard__community-exchange-myoffer-price">Echange</p>
        </div>
        <a className="dashboard__community-exchange-showmore">Voir toutes mes offres</a>
      </div>
      <div className="dashboard__community-exchange">
        <h1 className="dashboard__community-exchange-title">Mes critiques</h1>
        <div className="dashboard__community-exchange-mycritical">
          <div className="dashboard__community-exchange-mycritical-header">
            <div className="dashboard__community-exchange-mycritical-icon">
              <span className="dashboard__community-exchange-mycritical-icon-grey">10</span>
            </div>
            <div className="dashboard__community-exchange-mycritical-infos">
              <div className="dashboard__community-exchange-mycritical-book">
                <h1 className="dashboard__community-exchange-mycritical-title">Crépuscule des titans</h1>
                <p className="dashboard__community-exchange-mycritical-author">Papacito</p>
              </div>

              <p className="dashboard__community-exchange-mycritical-date">10/09/2020</p>
            </div>
          </div>
          <p className="dashboard__community-exchange-mycritical-text">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...</p>
        </div>
        <div className="dashboard__community-exchange-mycritical">
          <div className="dashboard__community-exchange-mycritical-header">
            <div className="dashboard__community-exchange-mycritical-icon">
              <span className="dashboard__community-exchange-mycritical-icon-grey">7</span>
            </div>
            <div className="dashboard__community-exchange-mycritical-infos">
              <div className="dashboard__community-exchange-mycritical-book">
                <h1 className="dashboard__community-exchange-mycritical-title">Le cri du Moloch</h1>
                <p className="dashboard__community-exchange-mycritical-author">Jean Dufaux</p>
              </div>

              <p className="dashboard__community-exchange-mycritical-date">08/09/2020</p>
            </div>
          </div>
          <p className="dashboard__community-exchange-mycritical-text">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...</p>
        </div>
        <a href="#" className="dashboard__community-exchange-showmore">Voir toutes mes critiques</a>

      </div>
    </div>
  </div>
);

export default Dashboard;
