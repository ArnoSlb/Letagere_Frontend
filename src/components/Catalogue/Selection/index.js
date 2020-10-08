import React from 'react';

import BookCard2 from 'src/components/Catalogue/BookCard2';
import BookCard3 from 'src/components/Catalogue/BookCard3';
import BookCard8 from 'src/components/Catalogue/BookCard8';
import BookCard9 from 'src/components/Catalogue/BookCard9';
import BookCard10 from 'src/components/Catalogue/BookCard10';
import BookCard11 from 'src/components/Catalogue/BookCard11';
import './styles.scss';

const Selection = () => (
  <div className="selection">
    <div className="selection__frame">
      <h1 className="selection__frame__title">Les plus remarqués</h1>
      <div className="selection__frame__position">
        <BookCard8 />
        <BookCard11 />
        <BookCard9 />
        <BookCard3 />
        <BookCard10 />
        <BookCard3 />
        <BookCard2 />
      </div>
    </div>

  </div>
);

export default Selection;
