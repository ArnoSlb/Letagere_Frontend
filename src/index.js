/* eslint-disable no-unused-vars */
// == Import : npm
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { createStore } from 'redux';

// import store from 'src/store';
import AddToLibrary from 'src/components/AddTo/AddToLibrary';
import catalogueBddTest from 'src/reducers/catalogue';
import Letagere from 'src/containers/Letagere';

import store from 'src/store';

// const store = createStore(catalogueBddTest);

// == Render
// 1. Élément React racine (celui qui contient l'ensemble de l'app)
//    => crée une structure d'objets imbriqués (DOM virtuel)
const rootReactElement = (
  <Provider store={store}>
    <Router>
      <Letagere />
    </Router>
  </Provider>
);
// 2. La cible du DOM (là où la structure doit prendre vie dans le DOM)
const target = document.getElementById('root');
// 3. Déclenchement du rendu de React (virtuel) => DOM (page web)
render(rootReactElement, target);
