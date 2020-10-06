/* eslint-disable no-unused-vars */
/* eslint-disable no-alert */
/* eslint-disable react/no-deprecated */
/* eslint-disable react/prop-types */
/* eslint-disable react/sort-comp */
/* eslint-disable react/jsx-indent */
/* eslint-disable no-console */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { Component } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router';
import { withRouter, Redirect } from 'react-router-dom';
import AuthService from './Auth/AuthService';
import './styles.scss';

const Auth = new AuthService();
class ModalLogin extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      first_name: '',
      last_name: '',
      nickname: '',
    };

    this.handleLogin = this.handleLogin.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.Auth = new AuthService();
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleLogin(event) {
    this.props.history.replace('/');
    this.Auth.login(this.state.email, this.state.password,
      { withCredentials: true })
      .then((res) => {
        console.log('Succès');
        <Redirect to="/" />;
        location.reload();
      })
      .catch((err) => {
        alert(err);
      });

    event.preventDefault();
  }

  componentWillMount() {
    if (this.Auth.loggedIn()) this.props.history.replace('/');
  }

  handleSubmit(event) {
    axios.post('http://3.91.26.197:80/projet-book-back/API/public/user/add', {
      email: this.state.email,
      password: this.state.password,
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      nickname: this.state.nickname,
    })

      .then((response) => {
        console.log(response);
        <Redirect to="/connexion" />;
        location.reload();
      })
      .catch((error) => {
        console.log(error);
      });

    event.preventDefault();
  }

  render() {
    return (

        <div className="modalLogin">

        <div className="section">
          <div className="container">

            <div className="text-center">
              <div className="section ">
                <h6><span>Se connecter</span><span>S'inscrire</span></h6>
                <input className="checkbox" type="checkbox" id="reg-log" />
                <label htmlFor="reg-log" />
                <div className="card-3d-wrap">
                  <div className="card-3d-wrapper">
                    <div className="card-front">
                      <div className="center-wrap">
                        <div className="section text-center">
                      <h4>Se connecter</h4>
                      <form onSubmit={this.handleLogin}>
                      <div className="form-group">
                        <input
                          type="email"
                          name="email"
                          className="form-style form-style-connect"
                          placeholder="Email"
                          value={this.state.email}
                          onChange={this.handleChange}
                          required
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="password"
                          name="password"
                          className="form-style form-style-connect"
                          placeholder="Mot de passe"
                          value={this.state.password}
                          onChange={this.handleChange}
                          required
                        />
                      </div>
                      <button type="submit" className="btn">Se connecter</button>
                      </form>
                      <p><a href="#" className="link">Mot de passe oublié ?</a></p>
                        </div>
                      </div>
                    </div>
                    <div className="card-back">
                      <div className="center-wrap">
                        <div className="section text-center">
                      <h4>S'inscrire</h4>
                      <form onSubmit={this.handleSubmit}>
                        <div className="form-container">
                          <div className="left-container">
                            <div className="form-group">
                              <label className="label-text" htmlFor="Nickname">Choisissez un nom d'utilisateur</label>
                              <input
                                type="text"
                                name="nickname"
                                className="form-style"
                                placeholder="Nom d'utilisateur"
                                value={this.state.nickname}
                                onChange={this.handleChange}
                                required
                              />

                            </div>
                            <div className="form-group mt-2">
                              <label className="label-text" htmlFor="email">Quelle est votre adresse email ?</label>
                              <input
                                type="email"
                                name="email"
                                className="form-style"
                                placeholder="Adresse Mail"

                                value={this.state.email}
                                onChange={this.handleChange}
                              />

                            </div>
                            <div className="form-group mt-2">
                              <label className="label-text" htmlFor="password">Choisissez un mot de passe sécurisé</label>
                              <input
                                type="password"
                                name="password"
                                className="form-style"
                                placeholder="Mot de passe"
                                value={this.state.password}
                                onChange={this.handleChange}
                              />
                            </div>

                          </div>
                          <div className="right-container">
                            <div className="form-group mt-2">
                              <label htmlFor="firstname">Comment vous appellez-vous ?</label>
                              <input
                                type="text"
                                name="first_name"
                                className="form-style"
                                placeholder="Prénom"
                                value={this.state.first_name}
                                onChange={this.handleChange}
                              />
                            </div>
                            <div className="form-group mt-2">
                              <label htmlFor="lastname">Quel est votre nom de famille ?</label>
                              <input
                                type="text"
                                name="last_name"
                                className="form-style"
                                placeholder="Nom"
                                value={this.state.last_name}
                                onChange={this.handleChange}
                              />
                            </div>

                          </div>
                        </div>
                        <button type="submit" className="btn">S'inscrire</button>
                      </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
    );
  }
}

export default withRouter(ModalLogin);
