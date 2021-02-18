import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { AppStateType } from '../../redux/state-Redux';
import Nav from './Nav';
const NavContainer = () => {
  return <Nav />;
};

const mapStateToProps = (state: AppStateType) => ({});

export default compose(
  withAuthRedirect,
  connect(mapStateToProps)
)(NavContainer);
