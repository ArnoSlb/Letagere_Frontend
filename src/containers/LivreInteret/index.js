import { connect } from 'react-redux';
import LivreInteret from 'src/components/Livre/LivreInteret';
import { fetchBookInterest } from 'src/actions/livreInteret';

const mapStateToProps = ({ livre }) => ({
  // je veux récupérer la recette qui contient le titre "slugifié"
  // qui correspond au param "slug".
  // Ce param "slug" est passé via la prop de configuration du container Recipe,
  // on peut le récupérer via ownProps
  // on se sert du selector getRecipeBySlug pour déporter la logique de tri et pouvoir réutiliser
  // cette fonction dans d'autres composants
  livre: livre.livre,
  livreInteret: livre.livreInteret,
  loadingInteret: livre.loadingInteret,
});

const mapDispatchToProps = (dispatch) => ({
  fetchBookInterest: (categoryId) => {
    dispatch(fetchBookInterest(categoryId));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(LivreInteret);
