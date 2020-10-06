import { connect } from 'react-redux';
import Filter from 'src/components/Catalogue/Filter';
import { fetchAuthor, fetchCategory } from 'src/actions/catalogue';
// const mapStateToProps = (state) => ({
//   catalogue: state.catalogue,
// });
const mapStateToProps = ({ authors, categories }) => ({
  authors: authors.authors,
  categories: categories.categories,
});

const mapDispatchToProps = (dispatch) => ({
  fetchAuthor: (authorId) => {
    console.log('containers', authorId);

    dispatch(fetchAuthor(authorId));
  },

  fetchCategory: (categoryId) => {
    console.log('containers', categoryId);

    dispatch(fetchCategory(categoryId));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
