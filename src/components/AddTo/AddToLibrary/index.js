/* eslint-disable camelcase */
/* eslint-disable class-methods-use-this */
/* eslint-disable no-console */
import React, { Component } from 'react';
import Plus from 'src/assets/images/plus-5-xxl.png';
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
class AddToLibrary extends Component {
  componentWillMount() {
    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleOnClick(event) {
    const add_library_message = document.getElementById('add_library_message');
    // const add_library_message_error = document.getElementById('add_library_message_error');
    
   
    add_library_message.style.display = 'block';
    add_library_message.innerText = 'Le livre a bien été ajouté à votre bibliothèque';
    // add_library_message_error.style.display = 'block';
    // add_library_message_error.innerText = 'Veuillez vous connecter afin de pouvoir ajouter un livre à votre bibliothèque';

    setTimeout(() => {
      add_library_message.innerText = '';
      add_library_message.style.display = 'none';
      // add_library_message_error.innerText = '';
      // add_library_message_error.style.display = 'none';
    }, 3000);
    console.log(config);
    console.log(event.target.id);
    axios.defaults.headers = { Authorization: `Bearer ${Auth.getToken()}`, 'Content-Type': 'application/json' };
    axios.post(`http://3.91.26.197:80/projet-book-back/API/public/api/library/add/${event.target.id}`).then((response) => {
      console.log('response', response);
    });
  }

  render() {
    return (
      <div className="addtolibrary">

        <img className="bookshelf__icons__heart" src={Plus} alt="" onClick={this.handleOnClick} />
      </div>
    );
  }
}

export default AddToLibrary;
