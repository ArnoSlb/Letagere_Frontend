import React from 'react';
import { Route, Switch } from 'react-router-dom';
/* import { library, dom } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons'; */

import Header from 'src/components/Header';
import Home from 'src/containers/Home';
import Catalogue from 'src/containers/Catalogue';
import CatalogueFilterAuthor from 'src/containers/CatalogueFilterAuthor';
import Critiques from 'src/components/Critiques';
import UnderConstruction from 'src/components/UnderConstruction';
import ModalLogin from 'src/components/ModalLogin';
import Livre from 'src/containers/Livre';
import QuiSommesNous from 'src/components/Footer/QuiSommesNous';
import NosEngagements from 'src/components/Footer/NosEngagements';
import NousContacter from 'src/components/Footer/NousContacter';
import Cookies from 'src/components/Footer/Cookies';
import Footer from 'src/components/Footer';
import NotFound from 'src/components/NotFound';
import Dashboard from 'src/components/Dashboard';

import './styles.scss';

const Letagere = () => (
  <div className="letagere">
    <Header />
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/mon-profil" exact>
        <Dashboard />
      </Route>
      <Route path="/critiques" exact>
        <UnderConstruction />
      </Route>
      <Route path="/offres" exact>
        <UnderConstruction />
      </Route>
      <Route path="/connexion" exact>
        <ModalLogin />
      </Route>
      <Route path="/qui-sommes-nous" exact>
        <UnderConstruction />
      </Route>
      <Route path="/engagements" exact>
        <UnderConstruction />
      </Route>
      <Route path="/contacts" exact>
        <NousContacter />
      </Route>
      <Route path="/cookies" exact>
        <UnderConstruction />
      </Route>
      <Route path="/catalogue" exact>
        <Catalogue />
      </Route>
      <Route
        exact
        path="/catalogue/auteur/:id/:indexpage"
        render={
              ({ match }) => (
                <CatalogueFilterAuthor slug={match} />
              )
        }
      />
      <Route
        exact
        path="/livre/:slug"
        render={
                  ({ match }) => (
                    <Livre slug={match.params.slug} />
                  )
                }
      />
      <NotFound />
    </Switch>
    <Footer />
  </div>
);

export default Letagere;
