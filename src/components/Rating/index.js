/* eslint-disable no-plusplus */
/* eslint-disable default-case */
import React from 'react';
import { Link } from 'react-router-dom';

import GreenBook from 'src/assets/images/rating/100.png';
import GreyBook from 'src/assets/images/rating/0.png';

function getStar(value) {
  switch (value) {
    case 0:
      return GreyBook;
    case 100:
      return GreenBook;
  }
}

function getStars(value) {
  const stars = [];
  const [whole] = parseFloat(value).toString().split('.');
  for (let i = 0; i < whole; i++) stars.push(100);
  for (let i = whole; i < 5; i++) stars.push(0);
  for (let id = value; id < 5; id++);

  return stars;
}
function handleRating(event, value) {
  console.log(event.target);
}
export default function Rating({ value, i }) {
  const ratingValue = i + 1;
  return (
    <div className="rating__books-container">
      {getStars(value).map((value) => (
        <label>
          <input className="rating__input" type="radio" name="rating" value={ratingValue} />
          <img src={getStar(value)} id="0" className="rating__books first_rate" alt="" onClick={handleRating} />
        </label>
      ))}
    </div>
  );
}
