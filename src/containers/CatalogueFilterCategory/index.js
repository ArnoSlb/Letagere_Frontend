import { connect } from 'react-redux';
import CatalogueFilterCategory from 'src/components/CatalogueFilterCategory';
import { fetchCatalogue, fetchCatalogueFilterCategory } from 'src/actions/catalogue';
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
    categoryId: ownProps.slug.params.id,
    indexPage: ownProps.slug.params.indexpage,
  });
};

const mapDispatchToProps = (dispatch) => ({
  fetchCatalogue: () => {
    dispatch(fetchCatalogue());
  },
  fetchCatalogueFilterCategory: (categoryId, indexPage) => {
    console.log('containers catalogue Filtre', categoryId, indexPage);
    dispatch(fetchCatalogueFilterCategory(categoryId, indexPage));
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

export default connect(mapStateToProps, mapDispatchToProps)(CatalogueFilterCategory);
