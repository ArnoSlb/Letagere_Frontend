import { connect } from 'react-redux';
import Livre from 'src/components/Livre';
import { fetchBook } from 'src/actions/livre';

const mapStateToProps = ({ livre }, ownProps) => ({
  // je veux récupérer la recette qui contient le titre "slugifié"
  // qui correspond au param "slug".
  // Ce param "slug" est passé via la prop de configuration du container Recipe,
  // on peut le récupérer via ownProps
  // on se sert du selector getRecipeBySlug pour déporter la logique de tri et pouvoir réutiliser
  // cette fonction dans d'autres composants
  livre: livre.livre,
  loading: livre.loading,
  slug: ownProps.slug,
});

const mapDispatchToProps = (dispatch) => ({
  fetchBook: (bookISBN) => {
    // console.log('containers livre', bookISBN);
    dispatch(fetchBook(bookISBN));
  },
  sendMessage: (bookISBN) => {
    // console.log('containers livre', bookISBN);
    dispatch(fetchBook(bookISBN));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Livre);
