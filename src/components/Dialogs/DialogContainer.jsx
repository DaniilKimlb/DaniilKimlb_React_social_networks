import React from 'react';
import {
  GET_MESSAGE_ACTION_CREATE,
  GET_TEXTM_ACTION_CREATE,
} from '../../redux/DialogPageReducer';
import Dialogs from './Dialogs';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { connect } from 'react-redux';
let mapStateToProps = (state) => {
  return {
    DialogPage: state.DialogPage,
    mValue: state.DialogPage.mValue,
    isAuth: state.Auth.isAuth,
  };
};
let mapDispatchToProps = (dispatch) => {
  return {
    sub() {
      dispatch(GET_MESSAGE_ACTION_CREATE());
    },
    getMessageText(text) {
      dispatch(GET_TEXTM_ACTION_CREATE(text));
    },
  };
};
let withAuth = withAuthRedirect(Dialogs);
let DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(withAuth);
export default DialogsContainer;
