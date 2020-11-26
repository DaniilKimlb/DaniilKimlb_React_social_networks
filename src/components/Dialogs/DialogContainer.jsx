import React from 'react';
import s from './Dialogs.module.css';
import ItemDialogs from './ItemDialogs/ItemDialogs';
import Message from './Message/Message';
import {
  GET_MESSAGE_ACTION_CREATE,
  GET_TEXTM_ACTION_CREATE,
} from '../../redux/DialogPageReducer';
import Dialogs from './Dialogs';
const DialogsContainer = (props) => {
  const DialogPage = props.store.getState().DialogPage;
  const Items = DialogPage.ItemDialogsInf.map((i) => (
    <ItemDialogs name={i.name} id={i.id} ava={i.ava} />
  ));
  const Messagef = DialogPage.MessageI.map((m) => (
    <Message message={m.message} id={m.id} />
  ));
  //   const getMessageg = React.createRef();
  let sub = () => {
    props.store.dispatch(GET_MESSAGE_ACTION_CREATE());
  };

  let getMessageText = (text) => {
    props.store.dispatch(GET_TEXTM_ACTION_CREATE(text));
  };
  return (
    <Dialogs
      ItemsL={Items}
      MessagefL={Messagef}
      subL={sub}
      getMessageTextL={getMessageText}
      mValue={DialogPage.mValue}
    />
  );
};
export default DialogsContainer;
