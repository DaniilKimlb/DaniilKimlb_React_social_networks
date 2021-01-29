import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import { logout } from '../../redux/authReducer';
import { compose } from 'redux/es/redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
const HeaderContainer = (props) => {
  return (
    <Header photos={props.photos} IsAuth={props.IsAuth} login={props.login} />
  );
};

const mapStateToProps = (state) => ({
  IsAuth: state.Auth.isAuth,
  login: state.Auth.login,
  photos: state.ProfilePage.profile.photos.large,
});
export default compose(
  connect(mapStateToProps, { logout }),
  withAuthRedirect
)(HeaderContainer);
