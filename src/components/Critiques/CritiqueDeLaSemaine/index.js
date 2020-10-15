import React from 'react';
import { Link } from 'react-router-dom';

import AddToLibrary from 'src/components/AddTo/AddToLibrary';
import AddToWish from 'src/components/AddTo/AddToWish';

import Heart from 'src/assets/images/heart-xxl.png';
import Plus from 'src/assets/images/plus-5-xxl.png';
import Sophie from 'src/assets/images/Rectangle -29.png';

import './styles.scss';

const CritiqueDeLaSemaine = () => {
  const AddTo = new AddToLibrary();
  const AddToW = new AddToWish();

  return (
    <div className="critiquedelasemaine">
      <h1 className="critiquedelasemaine__title">La critique de la semaine</h1>
      <div className="critiquedelasemaine__containers">
        <div className="critiquedelasemaine__containers__black">
          <div className="critiquedelasemaine__containers__black__book-container">
            <a className="critiquedelasemaine__containers__black__book" href="/livre/9782226421456">
              <img className="critiquedelasemaine__containers__black__book__cover" src="https://books.google.com/books/content?id=AfMJDQAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api" alt="Couverture de livre" />
              <div className="critiquedelasemaine__containers__black__book__award">Critique de la semaine</div>
              <div className="critiquedelasemaine__containers__black__book__award__back" />
            </a>
            <div className="critiquedelasemaine__containers__black__icons">
              <Link to="">
                <img className="critiquedelasemaine__containers__black__icon" src={Plus} alt="" onClick={AddToW.handleOnClick} />
              </Link>
              <Link to="">
                <img className="critiquedelasemaine__containers__black__icon" src={Heart} alt="" onClick={AddTo.handleOnClick} />
              </Link>
            </div>
          </div>
          <h1 className="critiquedelasemaine__containers__black__title">Le bazar des mauvais rêves</h1>
          <h2 className="critiquedelasemaine__containers__black__author">Stephen King</h2>
          <div className="critiquedelasemaine__containers__black__user">
            <div className="critiquedelasemaine__containers__black__user__infos">
                <span className="critiquedelasemaine__containers__black__user__infos__writeby">Rédigé par </span>
                <span>Sophie</span>
                <span>le 10 Mai 2020</span>
            </div>
            <img className="critiquedelasemaine__containers__black__user__picture" src={Sophie} alt="" />
          </div>
        </div>
        <div className="critiquedelasemaine__containers__white">
          <div className="critiquedelasemaine__containers__white__title-and-rate">
            <h1 className="critiquedelasemaine__containers__white__title-and-rate__title">Ce que j'ai ressenti: …Des cauchemars, à dévorer des yeux…</h1>
            <div className="critiquedelasemaine__containers__white__title-and-rate__rate">8</div>
          </div>
          <div className="critiquedelasemaine__containers__white__critical-container">
            <p className="critiquedelasemaine__containers__white__critical-container__critical">
              J'aime beaucoup l'incipit de ce synopsis, et finalement, ce qui rend cette lecture si intime avec cet auteur grandiose, ce sont toutes ses introductions qu'il nous livre juste avant, ces petits plaisirs de lecture délicieuses et qui accompagnent merveilleusement nos pires peurs…En effet, on apprend que le King était stressé de venir au Grand Rex devant ses fans, pendant que nous , nous trépignions d'impatience, de cette venue exceptionnelle à Paris…*ah ♫souvenir, ♫souvenirs♫* … Des jolis clins d'oeil, des infos inédites, des instants partagés, cela rend cette ballade dans ce Bazar plus immersive dans l'imaginaire de cet écrivain génialissime!
              Si je ne devais me rappeler que d'une seule, je choisirai Ur…J'aimerai bien justement trouvé ce Kindle rose et lire tous les inédits réels et fictifs de Stephen King justement!!!!Je pense que c'est le plus joli pouvoir qu'il est donné à un objet, et cette nouvelle m'a, non seulement plu, mais donné envie de découvrir Hemingway…Et sincèrement si je l'avais eu, moi je me serai contentée de garder jalousement ce secret, et de partager mes lectures d'un autre monde, avec ma binomette chérie… (mais qu'elle est chou, ma Stelphique ! ©Cannibal)…Qui a dit qu'au Bazar des Mauvais Rêves, on ne pouvais pas rêver tout court???!!!
              Stephen King nous régale toujours de mettre en scène Objet ou Personnages exceptionnels, pour toujours repousser plus loin les limites de nos peurs. Que ce soit la voiture dévoreuse de Mile 81, Une Dune de sable devin , ou les enfants de Sale Gosse ou de Billy Barrage, son imagination nous emmène toujours plus loin. D'un rien, il refait un monde rempli d'ombres et de prédateurs à l'image de A la dure et Une mort ou Un Bus est un autre monde. Tout est fait pour qu'on ne voie plus le quotidien comme il se doit, mais comme il pourrait devenir ( Premium Harmony, Morale, Après_vie, Nécro, le tonnerre en été) . Il est aussi un fin connaisseur de la nature humaine et de ses travers, et nous donne tout en douceur des reflets de notre société malade ( Batman et Robin ont un accrochage, Feux d'artifice imbibés, Hermann Wook est toujours en vie, Tommy le petit dieu vert de l'agonie). Bref, vous l'aurez compris, c'est un grand panache de bonnes nouvelles et de jolis moments de lecture…
              Et là, je suis juste agréablement surprise de savoir que le King écrit de la poésie!(Eglise d'ossements)!!Il est donc parfait cet auteur à mes yeux!!!Je vous l'avais bien dit!!!! Maintenant allez zou, piocher votre nouvelle préférée avant que des dents ne se referment sur vous…
              Ma note Plaisir de Lecture 8/10
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CritiqueDeLaSemaine;
