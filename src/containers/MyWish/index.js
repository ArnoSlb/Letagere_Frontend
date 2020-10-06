import { connect } from 'react-redux';
import MyWish from 'src/components/Dashboard/MyWish';
import { fetchAddWish } from 'src/actions/addWish';

const mapStateToProps = ({ addWish }) => ({
  addWish: addWish.addWish,
});

const mapDispatchToProps = (dispatch) => ({

  fetchAddWish: () => {
    dispatch(fetchAddWish());
  },

});

export default connect(mapStateToProps, mapDispatchToProps)(MyWish);
