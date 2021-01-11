import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux/es/redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import Nav from './Nav';
class NavContainer extends React.Component {
  render() {
    return <Nav {...this.props} />;
  }
}

const mapStateToProps = (state) => ({
  isAuth: state.Auth.isAuth,
});

export default compose(
  withAuthRedirect,
  connect(mapStateToProps)
)(NavContainer);
