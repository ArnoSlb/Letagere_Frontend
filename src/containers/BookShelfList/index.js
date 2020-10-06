import { connect } from 'react-redux';
import BookShelfList from 'src/components/Catalogue/BookShelfList';


// const mapStateToProps = (state) => ({
//   catalogue: state.catalogue,
// });

const mapStateToProps = ({ catalogue }) => ({
  catalogue: catalogue.catalogue,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(BookShelfList);
