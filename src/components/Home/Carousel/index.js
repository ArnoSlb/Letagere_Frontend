/* eslint-disable no-plusplus */
/* eslint-disable no-console */
/* eslint-disable class-methods-use-this */
/* eslint-disable no-unused-vars */
/* eslint-disable no-shadow */
import React, { Component } from 'react';

import './styles.scss';

export default class Carousel extends Component {
  constructor(props) {
    super(props);

    this.handleCancelAnchor = this.handleCancelAnchor.bind(this);
    this.handleAutoSlide = this.handleCancelAnchor.bind(this);
  }

  handleCancelAnchor(event) {
    const $slide = document.querySelector(event.target.getAttribute('href'));
    if (!$slide) return;

    if ($slide.scrollIntoViewIfNeeded) {
      event.preventDefault();
      $slide.scrollIntoViewIfNeeded();
    }
    else if ($slide.scrollIntoView) {
      event.preventDefault();
      $slide.scrollIntoView();
    }
  }

  render() {
    return (
      <section id="slideshow" className="carousel" aria-label="Gallery">
        <ol className="carousel__viewport slider">

          <li id="carousel__slide1" className="carousel__slide">
            <div className="carousel__snapper" onClick={this.handleCancelAnchor}>
              <a
                href="#carousel__slide4"
                className="carousel__prev"
              >Go to last slide
              </a>
              <a
                href="#carousel__slide2"
                className="carousel__next"
              >Go to next slide
              </a>
            </div>
          </li>
          <li id="carousel__slide2" className="carousel__slide">
            <div className="carousel__snapper" onClick={this.handleCancelAnchor}>
              <a
                href="#carousel__slide1"
                className="carousel__prev"
              >Go to last slide
              </a>
              <a
                href="#carousel__slide3"
                className="carousel__next"
              >Go to next slide
              </a>
            </div>
          </li>
          <li id="carousel__slide3" className="carousel__slide">
            <div className="carousel__snapper" onClick={this.handleCancelAnchor}>
              <a
                href="#carousel__slide2"
                className="carousel__prev"
              >Go to last slide
              </a>
              <a
                href="#carousel__slide4"
                className="carousel__next"
              >Go to next slide
              </a>
            </div>
          </li>
          <li id="carousel__slide4" className="carousel__slide">
            <div className="carousel__snapper" onClick={this.handleCancelAnchor}>
              <a
                href="#carousel__slide3"
                className="carousel__prev"
              >Go to last slide
              </a>
              <a
                href="#carousel__slide1"
                className="carousel__next"
              >Go to next slide
              </a>
            </div>
          </li>

        </ol>
        {/* <aside className="carousel__navigation">
          <ol className="carousel__navigation-list">
            <li className="carousel__navigation__item"><a href="#carousel__slide1" className="carousel__navigation-button">Go to slide 1</a></li>
            <li className="carousel__navigation__item"><a href="#carousel__slide2" className="carousel__navigation-button">Go to slide 2</a></li>
            <li className="carousel__navigation__item"><a href="#carousel__slide3" className="carousel__navigation-button">Go to slide 3</a></li>
            <li className="carousel__navigation__item"><a href="#carousel__slide4" className="carousel__navigation-button">Go to slide 4</a></li>
          </ol>
        </aside> */}

      </section>
    );
  }
}
