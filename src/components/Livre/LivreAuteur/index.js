import React, { useEffect } from 'react';

import BookCard from 'src/components/Catalogue/BookCard';

import './styles.scss';

const LivreAuteur = ({ livre, fetchBookAuthor, livreAuteur, loadingAuteur }) => {
  // console.log('LivreAuteur', livre);
  const author = livre.authors.[0];
  const authorId = author.authorId.id;
  // console.log('livreAuteurId', authorId);
  // console.log('LivreAuteur', livreAuteur);

  useEffect(() => {
    fetchBookAuthor(authorId);
  }, []);

  // console.log('loadingAuteur', loadingAuteur);
  if (loadingAuteur === false) {
    const livreAuteurListe = livreAuteur.books;
    // console.log('livreAuteurListe', livreAuteurListe);
    var dataAuteur = livreAuteurListe.length ? (
      livreAuteurListe.map((livre) => (
        <BookCard livre={livre} key={livre.ISBN} />
      ))
    ) : (
      <p>Aucun livre du même auteur</p>
    );
  }

  // const postData = livreAuteurListe.length ? (
  //   livreAuteurListe.map((livre) => (
  //     // <BookShelf livre={livre} key={livre.id} />
  //     <div>Test</div>
  //   ))
  // ) : (
  //   <p>Aucun livre pour l'instant</p>
  // );

  return (
    <div className="livreauteur">
      <div className="livreauteur__frame">
        <h1 className="livreauteur__frame__title">Les livres du même auteur ( {livreAuteur.countItems} ) </h1>
        <div className="livreauteur__frame__position">
          <div className="livreauteur__frame__position__auteur">
            {dataAuteur}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LivreAuteur;
