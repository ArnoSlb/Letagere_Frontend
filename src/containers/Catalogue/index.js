import { connect } from 'react-redux';
import Catalogue from 'src/components/Catalogue';
import { fetchCatalogue } from 'src/actions/catalogue';
import { fetchAuthors } from 'src/actions/authors';
import { fetchCategories } from 'src/actions/categories';
import { fetchAdd } from 'src/actions/add';
import { fetchAddWish } from 'src/actions/addWish';

const mapStateToProps = (state) => ({
  loading: state.catalogue.loading,
});

const mapDispatchToProps = (dispatch) => ({
  fetchCatalogue: () => {
    dispatch(fetchCatalogue());
  },
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
});

export default connect(mapStateToProps, mapDispatchToProps)(Catalogue);
