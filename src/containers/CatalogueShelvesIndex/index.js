import { connect } from 'react-redux';
import CatalogueShelvesIndex from 'src/components/CatalogueShelvesIndex';
import { fetchCatalogueIndex } from 'src/actions/catalogue';

const mapStateToProps = ({ catalogue }, ownProps) => {
// console.log({ownProps});
  return ({
    catalogue: catalogue.catalogue,
    indexPage: ownProps.indexPage,
  });
};

const mapDispatchToProps = (dispatch) => ({
  fetchCatalogueIndex: (indexPage) => {
    console.log('containers CatalogueShelvesIndex', indexPage);
    dispatch(fetchCatalogueIndex(indexPage));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(CatalogueShelvesIndex);
