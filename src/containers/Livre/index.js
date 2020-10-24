import { connect } from 'react-redux';
import Livre from 'src/components/Livre';
import { fetchBook, addMessage, setMessage } from 'src/actions/livre';

const mapStateToProps = ({ livre }, ownProps) => {
  return ({
    // je veux récupérer la recette qui contient le titre "slugifié"
    // qui correspond au param "slug".
    // Ce param "slug" est passé via la prop de configuration du container Recipe,
    // on peut le récupérer via ownProps
    // on se sert du selector getRecipeBySlug pour déporter la logique de tri et pouvoir réutiliser
    // cette fonction dans d'autres composants
  
    livre: livre.livre,
    loading: livre.loading,
    slug: ownProps.slug,
    inputValue: livre.newMessageContent,
  });
}

const mapDispatchToProps = (dispatch) => ({
  fetchBook: (bookISBN) => {
    // console.log('containers livre', bookISBN);
    dispatch(fetchBook(bookISBN));
  },
  sendMessage: (bookISBN) => {
    dispatch(addMessage());
    // dispatch(fetchBook(bookISBN));
  },
  setNewMessageContent: (message) => {
    dispatch(setMessage(message));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Livre);
