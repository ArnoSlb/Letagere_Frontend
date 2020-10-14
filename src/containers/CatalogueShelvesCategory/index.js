import { connect } from 'react-redux';
import CatalogueShelvesCategory from 'src/components/CatalogueShelvesCategory';
import { fetchCatalogueFilterCategory } from 'src/actions/catalogue';

const mapStateToProps = ({ catalogue }, ownProps) => {
// console.log({ownProps});
  return ({
    catalogue: catalogue.catalogue,
    categoryId: ownProps.categoryId,
    indexPage: ownProps.indexPage,
  });
};

const mapDispatchToProps = (dispatch) => ({
  fetchCatalogueFilterCategory: (categoryId, indexPage) => {
    console.log('containers CatalogueShelvesCategory', categoryId, indexPage);
    dispatch(fetchCatalogueFilterCategory(categoryId, indexPage));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(CatalogueShelvesCategory);
