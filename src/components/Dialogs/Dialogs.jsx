import { NavLink } from 'react-router-dom';
import React from 'react';
import s from './Dialogs.module.css';
import ItemDialogs from './ItemDialogs/ItemDialogs';
import Message from './Message/Message';
import {
  GET_MESSAGE_ACTION_CREATE,
  GET_TEXTM_ACTION_CREATE,
} from '../../redux/state';
///=================================

////===========================================

const Dialogs = (props) => {
  const Items = props.ItemDialogsInf.map((i) => (
    <ItemDialogs name={i.name} id={i.id} ava={i.ava} />
  ));
  const Messagef = props.MessageI.map((m) => (
    <Message message={m.message} id={m.id} />
  ));
  const getMessageg = React.createRef();
  let sub = () => {
    props.dispatch(GET_MESSAGE_ACTION_CREATE());
  };

  let getMessageText = () => {
    let text = getMessageg.current.value;
    props.dispatch(GET_TEXTM_ACTION_CREATE(text));
  };
  return (
    <div className={s.Dialogs}>
      <div className={s.itemDialogs}>{Items}</div>
      <div className={s.Messages}>
        {Messagef}
        <input
          className={s.inp}
          type="text"
          value={props.mValue}
          onChange={getMessageText}
          placeholder="Введите сообщение..."
          ref={getMessageg}
        />
        <input
          className={s.but}
          type="submit"
          onClick={sub}
          value="Отправить"
        />
      </div>
    </div>
  );
};
export default Dialogs;
