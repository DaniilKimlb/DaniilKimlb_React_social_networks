import React from 'react';
import {
  GET_MESSAGE_ACTION_CREATE,
  GET_TEXTM_ACTION_CREATE,
} from '../../redux/DialogPageReducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';
let mapStateToProps = (state) => {
  return {
    DialogPage: state.DialogPage,
    mValue: state.DialogPage.mValue,
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
let DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);
export default DialogsContainer;
