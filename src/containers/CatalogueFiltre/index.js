import { connect } from 'react-redux';
import CatalogueFiltre from 'src/components/CatalogueFiltre';
import { fetchCatalogue, fetchCatalogueFilterAuthor } from 'src/actions/catalogue';
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
    authorId: ownProps.slug.params.id,
    indexPage: ownProps.slug.params.indexpage,
  });
};

const mapDispatchToProps = (dispatch) => ({
  fetchCatalogue: () => {
    dispatch(fetchCatalogue());
  },
  fetchCatalogueFilterAuthor: (authorId, indexPage) => {
    console.log('containers catalogue Filtre', authorId, indexPage);
    dispatch(fetchCatalogueFilterAuthor(authorId, indexPage));
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

export default connect(mapStateToProps, mapDispatchToProps)(CatalogueFiltre);
