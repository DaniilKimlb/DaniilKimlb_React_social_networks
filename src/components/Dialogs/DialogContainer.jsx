import React from 'react';
import {
  sub,
  getMessageText,
} from '../../redux/DialogPageReducer';
import Dialogs from './Dialogs';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { connect } from 'react-redux';
import { compose } from 'redux/es/redux';
let mapStateToProps = (state) => {
  return {
    DialogPage: state.DialogPage,
    mValue: state.DialogPage.mValue,
    isAuth: state.Auth.isAuth,
  };
};
export default compose(
  connect(mapStateToProps, {sub, getMessageText}),
  withAuthRedirect
)(Dialogs)
