import React from 'react';
import { Link } from 'react-router-dom';
import { getAuthorUrl, getCategoryUrl } from 'src/selectors/catalogue';

import './styles.scss';

const Filter = ({
  authors, categories, fetchAuthor, fetchCategory,
}) => {
  // console.log('filter', categories);

  const authorsList = authors.length ? (
    authors.map((author) => (
      // <li onClick={() => fetchAuthor(author.id)}>{author.name}</li>
      <li>
        <a href={`/catalogue/auteur/${author.id}/1` }>{author.name}</a>
      </li>
    ))
  ) : (
    <p>Aucun auteur</p>
  );

  const categoriesArray = categories.categories;
  const categoriesList = categoriesArray.length ? (
    categoriesArray.map((category) => (
      <li onClick={() => fetchCategory(category.id)}>{category.name}</li>
    ))
  ) : (
    <p>Aucune catégorie</p>
  );
  // console.log(authorsList);

  return (
    <div className="filter">
      <h1 className="filter__title">Filter</h1>
      <div className="swanky">
        <div className="swanky_wrapper">
          <input className="filter__input" type="radio" name="radio" id="ParAuteur" />
          <label className="filter__label" htmlFor="ParAuteur">
            <span>Par Auteur</span>
            <div className="lil_arrow" />
            <div className="bar" />
            <div className="swanky_wrapper__content">
              <ul>
                <div className="authors_scroll">
                  {authorsList}
                </div>
              </ul>
            </div>
          </label>
          <input className="filter__input" type="radio" name="radio" id="ParGenre" />
          <label className="filter__label" htmlFor="ParGenre">
            <span>Par Genre</span>
            <div className="lil_arrow" />
            <div className="bar" />
            <div className="swanky_wrapper__content">
              <ul>
                {categoriesList}
              </ul>
            </div>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Filter;
