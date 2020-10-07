import React from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './styles.scss';

const SlickCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    arrows: true,
  };

  return (
    <div className="slickcarousel">
      <Slider {...settings}>
        <div className="slickcarousel__1" />
        <div className="slickcarousel__2" />
        <div className="slickcarousel__3" />
        <div className="slickcarousel__4" />
      </Slider>
    </div>
  );
};

export default SlickCarousel;
