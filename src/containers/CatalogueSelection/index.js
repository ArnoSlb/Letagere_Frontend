import { connect } from 'react-redux';
import CatalogueSelection from 'src/components/Catalogue/Selection';

const mapStateToProps = ({ catalogueSelection }) => ({
  loadingSelection: catalogueSelection.loading,
  selection: catalogueSelection.catalogueSelection,
});

const mapDispatchToProps = () => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(CatalogueSelection);
