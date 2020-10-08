import React, { useEffect} from 'react';

import BookCard from 'src/components/Catalogue/BookCard';
import BookCard11 from 'src/components/Catalogue/BookCard11';
import BookCard3 from 'src/components/Catalogue/BookCard3';
import BookCard8 from 'src/components/Catalogue/BookCard8';
import BookCard12 from 'src/components/Catalogue/BookCard12';

import './styles.scss';

const LivreInteret = ({ livre, fetchBookInterest, livreInteret, loadingInteret }) => {
  // console.log('livreInteret', livre);
  const category = livre.categories.[0];
  const categoryId = category.categoryId.id;
  // console.log(categoryId);

  useEffect(() => {
    fetchBookInterest(categoryId);
  }, []);

  console.log('LivreInteret', livreInteret);
  console.log('loadingInteret', loadingInteret);
  if (loadingInteret === false) {
    const livreInteretListe = livreInteret.books;
    console.log('livreInteretListe', livreInteretListe);
    var dataInteret = livreInteretListe.length ? (
      livreInteretListe.map((livre) => (
        <BookCard livre={livre} key={livre.id} />
      ))
    ) : (
      <p>Aucun livre du même auteur</p>
    );
  }

  return (
    <div className="livreinteret">
    <div className="livreinteret__frame">
      <h1 className="livreinteret__frame__title">Les livres qui pourraient aussi vous interesser</h1>
      <div className="livreinteret__frame__position">
        {/* <img className="livreinteret__frame__position__flechegauche" src={arrow} alt="" /> */}
        <div className="livreinteret__frame__position__interet">
          {dataInteret}
        </div>
        {/* <img className="livreinteret__frame__position__flechedroite" src={arrow} alt="" /> */}
      </div>
    </div>

  </div>
  )
}

export default LivreInteret;
