import React from 'react';

import BookCard from 'src/components/Catalogue/BookCard';

import './styles.scss';

const Selection = ({ selection }) => {
  // console.log(selection);
  const selectionList = selection.length ? (
    selection.map((livre) => (
      <BookCard livre={livre} key={livre.id} />
    ))
  ) : (
    <p>Pas de livres dans cette catégorie</p>
  );

  return (
    <div className="selection">
      <div className="selection__frame">
        <h1 className="selection__frame__title">Les plus remarqués</h1>
        <div className="selection__frame__position">
          {selectionList}
        </div>
      </div>
    </div>
  );
};



export default Selection;
