/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import { Link } from 'react-router-dom';
import AddToLibrary from 'src/components/AddTo/AddToLibrary';
import AddToWish from 'src/components/AddTo/AddToWish';

import Heart from 'src/assets/images/heart-xxl.png';
import Plus from 'src/assets/images/plus-5-xxl.png';
import GreenBook from 'src/assets/images/book-xxl green.png';
import GreyBook from 'src/assets/images/book-xxl grey.png';
import Feather from 'src/assets/images/feather-xxl.png';
import Sophie from 'src/assets/images/Rectangle -29.png';

import './styles.scss';

const TopOfWeek = ({ heart }) => {
  // console.log('TopOfWeek', heart);
  const selections = heart.length ? (
    heart.map((heartBook) => {
      const author = heartBook.authors.[0];
      const firstAuthor = author.authorId.name;
      const lien2 = heartBook.ISBN;
      const lien1 = '/livre/';
      const lien = lien1 + lien2;
      const AddTo = new AddToLibrary();
      const AddToW = new AddToWish();
      return (
        <div className="topofweek__book" key={heartBook.id}>
          <div className="topofweek__book--info">
            <div className="book-container">
              <a className="book" href={lien}>
                <img className="topofweek__cover" src={heartBook.cover} alt="Couverture de livre" />
              </a>
            </div>
            <Link to={lien}>
              <p className="topofweek__book--name">{heartBook.title}</p>
            </Link>
            <p className="topofweek__book--author">{firstAuthor}</p>
            <div className="topofweek__book--icons">
              <img className="topofweek__book--icon" src={GreenBook} alt="" />
              <img className="topofweek__book--icon" src={GreenBook} alt="" />
              <img className="topofweek__book--icon" src={GreenBook} alt="" />
              <img className="topofweek__book--icon" src={GreenBook} alt="" />
              <img className="topofweek__book--icon" src={GreyBook} alt="" />
            </div>
          </div>
          <div className="topofweek__icons">
            <a>
              <img className="topofweek__icon" src={Plus} alt="" onClick={AddToW.handleOnClick} id={heartBook.ISBN} />
            </a>
            <a>
              <img className="topofweek__icon" src={Heart} alt="" onClick={AddTo.handleOnClick} id={heartBook.ISBN} />
            </a>
          </div>
        </div>
      );
    })
  ) : (
    <p>Pas de selection cette semaine</p>
  );

  return (
    <div className="topofweek">
      <div className="topofweek__like">
        <h1 className="topofweek__like--title">Les coups de <span className="topofweek__like--title--heart">&#9829;</span> de la semaine</h1>
        <div className="topofweek__like__container">
          {selections}
        </div>
      </div>
      <div className="topofweek__critical">
        <h1 className="topofweek__critical--title">La critique de la semaine   <img className="topofweek__critical--feather" src={Feather} alt="" /> </h1>
        <div className="topofweek__critical--post">
          <div className="topofweek__critical--header">
            <div className="topofweek__critical--author">
              <img className="topofweek__critical--author--picture" src={Sophie} alt="" />
              <div className="topofweek__critical--author--infos">
                <p className="topofweek__critical--author--name">Sophie</p>
                <p className="topofweek__critical--date">10 Mai 2020</p>
              </div>
            </div>
            <span className="topofweek__critical--rating">8</span>
          </div>

          <div className="topofweek__critical--content">
            <p className="topofweek__critical--text">J'aime beaucoup l'incipit de ce synopsis, et finalement, ce qui rend cette lecture si intime avec cet auteur grandiose, ce sont toutes ses introductions qu'il nous livre juste avant, ces petits plaisirs de lecture délicieuses et qui accompagnent merveilleusement nos pires peurs…En effet, on apprend que le King était stressé de venir au Grand Rex devant ses fans, pendant que nous , nous trépignions d'impatience, de cette venue exceptionnelle à Paris…*ah ♫souvenir, ♫souvenirs♫* … Des jolis clins d'oeil, des infos inédites, des instants partagés, cela rend cette ballade dans ce Bazar plus immersive dans l'imaginaire de cet écrivain génialissime!
              Si je ne devais me rappeler que d'une seule, je choisirai Ur…J'aimerai bien justement trouvé ce Kindle rose et lire tous les inédits réels et fictifs de Stephen King justement!!!!Je pense que c'est le plus joli pouvoir qu'il est donné à un objet, et cette nouvelle m'a, non seulement plu, mais donné envie de découvrir Hemingway…Et sincèrement si je l'avais eu, moi je me serai contentée de garder jalousement ce secret, et de partager mes lectures d'un autre monde, avec ma binomette chérie… (mais qu'elle est chou, ma Stelphique ! ©Cannibal)…Qui a dit qu'au Bazar des Mauvais Rêves, on ne pouvais pas rêver tout court???!!!
              Stephen King nous régale toujours de mettre en scène Objet ou Personnages exceptionnels, pour toujours repousser plus loin les limites de nos peurs. Que ce soit la voiture dévoreuse de Mile 81, Une Dune de sable devin , ou les enfants de Sale Gosse ou de Billy Barrage, son imagination nous emmène toujours plus loin. D'un rien, il refait un monde rempli d'ombres et de prédateurs à l'image de A la dure et Une mort ou Un Bus est un autre monde. Tout est fait pour qu'on ne voie plus le quotidien comme il se doit, mais comme il pourrait devenir ( Premium Harmony, Morale, Après_vie, Nécro, le tonnerre en été) . Il est aussi un fin connaisseur de la nature humaine et de ses travers, et nous donne tout en douceur des reflets de notre société malade ( Batman et Robin ont un accrochage, Feux d'artifice imbibés, Hermann Wook est toujours en vie, Tommy le petit dieu vert de l'agonie). Bref, vous l'aurez compris, c'est un grand panache de bonnes nouvelles et de jolis moments de lecture…
              Et là, je suis juste agréablement surprise de savoir que le King écrit de la poésie!(Eglise d'ossements)!!Il est donc parfait cet auteur à mes yeux!!!Je vous l'avais bien dit!!!! Maintenant allez zou, piocher votre nouvelle préférée avant que des dents ne se referment sur vous…
              Ma note Plaisir de Lecture 8/10
            </p>
            <p><a href="/critiques" className="topofweek__critical__plus">Voir plus</a></p>
          </div>
        </div>
        <div className="topofweek__critical--book">
          <img className="topofweek__critical--book--cover" src="https://books.google.com/books/content?id=AfMJDQAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api" alt="" />
          <p className="topofweek__critical--book--title">Le bazar des mauvais rêves</p>
          <p className="topofweek__critical--book--author">Stephen King</p>
        </div>

      </div>
    </div>
  );
};

export default TopOfWeek;
