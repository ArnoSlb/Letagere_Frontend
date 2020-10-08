import { connect } from 'react-redux';
import LivreAuteur from 'src/components/Livre/LivreAuteur';
import { fetchBookAuthor } from 'src/actions/livreAuteur';

const mapStateToProps = ({ livre }) => ({
  // je veux récupérer la recette qui contient le titre "slugifié"
  // qui correspond au param "slug".
  // Ce param "slug" est passé via la prop de configuration du container Recipe,
  // on peut le récupérer via ownProps
  // on se sert du selector getRecipeBySlug pour déporter la logique de tri et pouvoir réutiliser
  // cette fonction dans d'autres composants
  livre: livre.livre,
  livreAuteur: livre.livreAuteur,
  loadingAuteur: livre.loadingAuteur,
});

const mapDispatchToProps = (dispatch) => ({
  fetchBookAuthor: (authorId) => {
    dispatch(fetchBookAuthor(authorId));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(LivreAuteur);
