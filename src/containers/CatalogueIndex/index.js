import { connect } from 'react-redux';
import CatalogueIndex from 'src/components/CatalogueIndex';
import { fetchCatalogue, fetchCatalogueIndex } from 'src/actions/catalogue';
import { fetchAuthors } from 'src/actions/authors';
import { fetchCategories } from 'src/actions/categories';
import { fetchAdd } from 'src/actions/add';
import { fetchAddWish } from 'src/actions/addWish';
import { fetchSelection } from 'src/actions/catalogueSelection';

const mapStateToProps = ({ catalogue, catalogueSelection }, ownProps) => {
  // console.log(ownProps);
  return ({
    loading: catalogue.loading,
    loadingSelection: catalogueSelection.loading,
    indexPage: ownProps.slug.params.indexpage,
  });
};

const mapDispatchToProps = (dispatch) => ({
  fetchCatalogue: () => {
    dispatch(fetchCatalogue());
  },
  fetchCatalogueIndex: (indexPage) => {
    console.log('containers catalogue index', indexPage);
    dispatch(fetchCatalogueIndex(indexPage));
  },
  // fetchBook: (bookISBN) => {
  //   // console.log('containers livre', bookISBN);

  //   dispatch(fetchBook(bookISBN));
  // },
  fetchAuthors: () => {
    dispatch(fetchAuthors());
  },
  fetchCategories: () => {
    dispatch(fetchCategories());
  },
  fetchAdd: () => {
    dispatch(fetchAdd());
  },
  fetchAddWish: () => {
    dispatch(fetchAdd());
  },
  fetchSelection: () => {
    dispatch(fetchSelection());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(CatalogueIndex);
