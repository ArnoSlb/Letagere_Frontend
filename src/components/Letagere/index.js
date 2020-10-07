import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
/* import { library, dom } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons'; */

import Header from 'src/components/Header';
import Home from 'src/containers/Home';
import Catalogue from 'src/containers/Catalogue';
// import CatalogueFiltre from 'src/components/CatalogueFiltre';
import Critiques from 'src/components/Critiques';
import Offres from 'src/components/Offres';
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
        <Critiques />
      </Route>
      <Route path="/offres" exact>
        <Offres />
      </Route>
      <Route path="/connexion" exact>
        <ModalLogin />
      </Route>
      <Route path="/qui-sommes-nous" exact>
        <QuiSommesNous />
      </Route>
      <Route path="/engagements" exact>
        <NosEngagements />
      </Route>
      <Route path="/contacts" exact>
        <NousContacter />
      </Route>
      <Route path="/cookies" exact>
        <Cookies />
      </Route>
      <Route path="/catalogue" exact>
        <Catalogue />
      </Route>
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
