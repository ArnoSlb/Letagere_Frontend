import { connect } from 'react-redux';
import CatalogueShelvesAuthor from 'src/components/CatalogueShelvesAuthor';
import { fetchCatalogueFilterAuthor } from 'src/actions/catalogue';

const mapStateToProps = ({ catalogue }, ownProps) => {
// console.log({ownProps});
  return ({
    catalogue: catalogue.catalogue,
    authorId: ownProps.authorId,
    indexPage: ownProps.indexPage,
  });
};

const mapDispatchToProps = (dispatch) => ({
  fetchCatalogueFilterAuthor: (authorId, indexPage) => {
    console.log('containers CatalogueShelvesAuthor', authorId, indexPage);
    dispatch(fetchCatalogueFilterAuthor(authorId, indexPage));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(CatalogueShelvesAuthor);
