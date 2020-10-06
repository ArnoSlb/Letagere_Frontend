import React from 'react';

import './styles.scss';

const SearchField = () => (

  <form className="searchfield">
    <input

      className="searchfield__input"
      type="search"
      placeholder="Chercher un livre "
      icon="search"
    />
  </form>

);

export default SearchField;
