import { connect } from 'react-redux';
import Library from 'src/components/Dashboard/MyLibrary';
import { fetchAdd } from 'src/actions/add';

const mapStateToProps = ({ add }) => ({
  add: add.add,
});


const mapDispatchToProps = (dispatch) => ({

  fetchAdd: () => {
    dispatch(fetchAdd());
  },

});

export default connect(mapStateToProps, mapDispatchToProps)(Library);
