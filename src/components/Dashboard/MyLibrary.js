import React, { useEffect } from 'react';
import BookShelf from 'src/components/Catalogue/BookShelf';
import './styles.scss';

const Library = ({ add, fetchAdd }) => {
  useEffect(() => {
    fetchAdd();
  }, []);

  const addData = add.length ? (
    add.map((livre) => (
      <BookShelf livre={livre.bookId} key={livre.bookId.id} />

    ))
  ) : (
    <p />
  );
  console.log(add.length);

  return (
    <div className="mylibrary-container">
      <p className="mylibrary-number-books"><span className="mylibrary-number">{add.length}</span> livres dans votre bibliothèque. </p>
      <div className="mylibrary">
        {addData}
      </div>
    </div>
  );
};
export default Library;
