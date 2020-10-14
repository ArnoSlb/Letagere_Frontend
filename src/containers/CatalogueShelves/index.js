import { connect } from 'react-redux';
import Shelves from 'src/components/Catalogue/CatalogueShelves';
import { fetchCatalogueIndex } from 'src/actions/catalogue';

const mapStateToProps = ({ catalogue }) => ({
  // on recoit un state du store qui provient du reducer
  // dans notre reducer, on utlise combinedReducers
  // on ne peut donc pas laisser state en argument
  // on doit le decomposer et ce qui nous interesse ici est le state catalogue
  // dans le state catalogue on vient ensuite récupérer l'objet catalogue
  // que l'on place dans un 'attribut' catalogue ici en blanc
  // attribut: state.catalogue
  catalogue: catalogue.catalogue,
});

const mapDispatchToProps = (dispatch) => ({
  fetchCatalogueIndex: (indexPage) => {
    console.log('containers CatalogueShelves', indexPage);
    dispatch(fetchCatalogueIndex(indexPage));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Shelves);
