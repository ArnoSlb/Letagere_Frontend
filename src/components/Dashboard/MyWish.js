import React, { useEffect } from 'react';
import BookShelf from 'src/components/Catalogue/BookShelf';
import './styles.scss';

const MyWish = ({ addWish, fetchAddWish }) => {
  useEffect(() => {
    fetchAddWish();
  }, []);


  const addWishData = addWish.length ? (
    addWish.map((livre) => (
      <BookShelf livre={livre.bookId} key={livre.bookId.id} />

    ))
  ) : (
    <p />
  );
  console.log(addWish.length);

  return (
    <div className="mywish-container">
      <p className="mywish-number-books"><span className="mywish-number">{addWish.length}</span> livres dans votre liste de souhaits. </p>
      <div className="mywish">
        {addWishData}
      </div>
    </div>
  );
};
export default MyWish;
