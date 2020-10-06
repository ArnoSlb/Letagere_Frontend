import { connect } from 'react-redux';
import Letagere from 'src/components/Letagere';
import { fetchCatalogue } from 'src/actions/catalogue';

import { fetchAdd } from 'src/actions/add';
import { fetchAddWish } from 'src/actions/addWish';

import { fetchAuthors } from 'src/actions/authors';
import { fetchCategories } from 'src/actions/categories';


const mapStateToProps = null;

const mapDispatchToProps = (dispatch) => ({
  fetchCatalogue: () => {
    dispatch(fetchCatalogue());
  },

  fetchAdd: () => {
    dispatch(fetchAdd());
  },
  fetchAddWish: () => {
    dispatch(fetchAddWish());
  },
  fetchAuthors: () => {
    dispatch(fetchAuthors());
  },
  fetchCategories: () => {
    dispatch(fetchCategories());

  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Letagere);
