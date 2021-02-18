import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import { logout } from '../../redux/authReducer';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { useState } from 'react';
import Preloader from '../Preloader/Preloader';
import { compose } from 'redux';
import { AppStateType } from '../../redux/state-Redux';

type MapStateToPropsType = {
  IsAuth: boolean;
  login: string | null;
};
type MapDispatchToPropsType = {
  logout: () => void;
};

type PropsType = MapStateToPropsType & MapDispatchToPropsType;

const HeaderContainer: React.FC<PropsType> = ({ logout, login, IsAuth }) => {
  return <Header logout={logout} IsAuth={IsAuth} login={login} />;
};

const mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
  IsAuth: state.Auth.isAuth,
  login: state.Auth.login,
});
export default compose(
  connect<MapStateToPropsType, MapDispatchToPropsType, {}, AppStateType>(
    mapStateToProps,
    { logout }
  ),
  withAuthRedirect
)(HeaderContainer);
