import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import { logout } from '../../redux/authReducer';
import { getProfile } from '../../redux/ProfilePageReducer';
import { compose } from 'redux/es/redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { useState } from 'react';
import Preloader from '../Preloader/Preloader';
const HeaderContainer = (props) => {
  if (!props.profile) return <Preloader />;
  else {
    const photos = props.profile.photos.large;
    return (
      <Header
        photos={photos}
        logout={props.logout}
        IsAuth={props.IsAuth}
        login={props.login}
      />
    );
  }
};

const mapStateToProps = (state) => ({
  IsAuth: state.Auth.isAuth,
  login: state.Auth.login,
  logout: state.Auth.logout,
  profile: state.ProfilePage.profile,
});
export default compose(
  connect(mapStateToProps, { logout, getProfile }),
  withAuthRedirect
)(HeaderContainer);
