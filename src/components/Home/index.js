import React from 'react';

import Carousel from 'src/components/Home/Carousel';
import Presentation from 'src/components/Home/Presentation';
import TopOfWeek from 'src/components/Home/TopOfWeek';
import Offer from 'src/components/Home/HomeOffer';

import './styles.scss';

const Home = () => (
  <div className="home">
    <Carousel />
    <TopOfWeek />
    <Presentation />
    <Offer />
  </div>
);

export default Home;
