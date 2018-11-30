import { connect } from 'react-redux';
import Nav from 'components/Nav/Nav';

const mapStateToProps = state => ({
  isXs: state.screenSize.isXs,
});

const DisplayNav = connect(mapStateToProps)(Nav);

export default DisplayNav;
