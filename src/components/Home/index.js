import React, { useEffect } from 'react';
import DotLoader from 'react-spinners/DotLoader';
import PropTypes from 'prop-types';

import Presentation from 'src/components/Home/Presentation';
import TopOfWeek from 'src/containers/TopOfWeek';
import Offer from 'src/components/Home/HomeOffer';
import SlickCarousel from 'src/components/Home/SlickCarousel';

import './styles.scss';

const Home = ({ fetchHeart, loading }) => {
  useEffect(() => {
    fetchHeart();
  }, []);

  return (
    <div>
      {loading ? (
        <div className="loader">
          <h1>Chargement</h1>
          <div className="loader__anim">
            <DotLoader
              size={50}
              color="#24816C"
              loading={loading}
            />
          </div>
        </div>
      ) : (
        <div className="home">
          <SlickCarousel />
          <TopOfWeek />
          <Presentation />
          <Offer />
        </div>
      )}
    </div>
  );
};

Home.propTypes = {
  fetchHeart: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default Home;
