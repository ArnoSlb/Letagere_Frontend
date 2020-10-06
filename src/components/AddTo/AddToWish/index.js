/* eslint-disable camelcase */
/* eslint-disable no-useless-constructor */
/* eslint-disable class-methods-use-this */
/* eslint-disable no-console */
import React, { Component } from 'react';
import Heart from 'src/assets/images/heart-xxl.png';
import axios from 'axios';
import AuthService from 'src/components/ModalLogin/Auth/AuthService';

import './styles.scss';
import { render } from 'react-dom';

const Auth = new AuthService();

const config = {
  headers: {
    Authorization: `Bearer ${Auth.getToken()}`,
  },
};
class AddToWish extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleOnClick(event) {
    const add_wishlist_message = document.getElementById('add_wishlist_message');
    add_wishlist_message.innerText = 'Le livre a bien été ajouté à votre liste de souhaits';
    add_wishlist_message.style.display = 'block';

    setTimeout(() => {
      add_wishlist_message.innerText = '';
      add_wishlist_message.style.display = 'none';
    }, 3000);

    console.log(config);
    console.log(event.target.id);
    axios.defaults.headers = { Authorization: `Bearer ${Auth.getToken()}`, 'Content-Type': 'application/json' };
    axios.post(`http://3.91.26.197/projet-book-back/API/public/api/library/wish/${event.target.id}/` + '1').then((response) => {
      console.log('response', response);
    });
  }

  render() {
    return (
      <div className="addtowish">

        <img className="bookshelf__icons__heart" src={Heart} alt="" onClick={this.handleOnClick} />
      </div>
    );
  }
}

export default AddToWish;
