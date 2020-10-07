import { connect } from 'react-redux';
import TopOfWeek from 'src/components/Home/TopOfWeek';

const mapStateToProps = ({ selections }) => ({
  // je veux récupérer la recette qui contient le titre "slugifié"
  // qui correspond au param "slug".
  // Ce param "slug" est passé via la prop de configuration du container Recipe,
  // on peut le récupérer via ownProps
  // on se sert du selector getRecipeBySlug pour déporter la logique de tri et pouvoir réutiliser
  // cette fonction dans d'autres composants
  heart: selections.heart,
  loading: selections.loading,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(TopOfWeek);
