/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import AuthService from 'src/components/ModalLogin/Auth/AuthService';
import { render } from 'react-dom';

import './styles.scss';

const Auth = new AuthService();

class AddMessage extends Component {
  render() {
    return (
      Auth.loggedIn()
        ? (
          <div id="addMessage">
            <p id="add_wishlist_message" />
            <p id="add_library_message" />
          </div>
        )

        : (
          <div className="addMessageError">
            <p id="add_wishlist_message_error" />
            <p id="add_library_message_error" />
          </div>
        )
    );
  }
}
export default AddMessage;
