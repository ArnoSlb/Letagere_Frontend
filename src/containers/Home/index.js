import { connect } from 'react-redux';
import Home from 'src/components/Home';
import { fetchHeart } from 'src/actions/selections_weekly';

const mapStateToProps = ({ selections }) => {
// console.log('containers home', selections);
  return ({
    loading: selections.loading,
  });
}

const mapDispatchToProps = (dispatch) => ({
  fetchHeart: () => {
    dispatch(fetchHeart());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
