import React from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './styles.scss';

const SlickCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true,
  };

  return (
    <div className="slickcarousel">
      <Slider {...settings}>
        <Link to="/livre/9791033512110">
          <div className="slickcarousel__1" />
        </Link>
        <Link to="/livre/9791033510109">
          <div className="slickcarousel__2" />
        </Link>
        <Link to="/livre/1789096499">
          <div className="slickcarousel__3" />
        </Link>
        <Link to="/livre/9791033510260">
          <div className="slickcarousel__4" />
        </Link>
      </Slider>
    </div>
  );
};

export default SlickCarousel;
