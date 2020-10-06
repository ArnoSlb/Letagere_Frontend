/* eslint-disable no-lone-blocks */
/* eslint-disable no-unused-expressions */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-deprecated */
import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Home from 'src/components/Home';

import AuthService from './AuthService';

export default function withAuth(AuthComponent) {
  const Auth = new AuthService('http://3.91.26.197:80/projet-book-back/API/public/api/login_check');
  return class AuthWrapped extends Component {
    constructor() {
      super();
      this.state = {
        user: null,
      };
    }

    componentWillMount() {
      if (!Auth.loggedIn()) {
        { Auth.loggedIn() ? <Redirect to="/connexion" /> : <Home />; }
      }
      else {
        try {
          const profile = Auth.getProfile();
          this.setState({
            user: profile,
          });
        }
        catch (err) {
          Auth.logout();
            <Redirect to="/connexion" />;
        }
      }
    }

    render() {
      if (this.state.user) {
        return (
          <AuthComponent history={this.props.history} user={this.state.user} />
        );
      }

      return null;
    }
  };
}
