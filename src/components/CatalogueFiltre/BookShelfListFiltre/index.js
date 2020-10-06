import React from 'react';

import BookShelf from 'src/components/Catalogue/BookShelf';

const BookShelfList = ({ catalogue }) => {
  console.log(catalogue);
  const books = catalogue.books;

  const postData = books.length ? (
    books.map((livre) => (
      <BookShelf livre={livre} key={livre.id} />
    ))
  ) : (
    <p>Aucun livre pour l'instant</p>
  );

  return (
    <div className="bookshelflist">
      {postData}
    </div>
  );
}

// const mapStateToProps = (state) => ({
//   posts: state.posts,
// });

export default BookShelfList;
