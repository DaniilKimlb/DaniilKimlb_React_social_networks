import { NavLink } from 'react-router-dom';
import React from 'react';
import s from './Dialogs.module.css';
import ItemDialogs from './ItemDialogs/ItemDialogs';
import Message from './Message/Message';

const Dialogs = (props) => {
  const Items = props.ItemDialogsInf.map((i) => (
    <ItemDialogs name={i.name} id={i.id} ava={i.ava} />
  ));
  const Messagef = props.MessageI.map((m) => (
    <Message message={m.message} id={m.id} />
  ));
  const getMessageg = React.createRef();
  let sub = () => {
    let a = getMessageg.current.value;
    props.getMessage(a);
  };
  let getMessageText = () => {
    let text = getMessageg.current.value;
    props.getTextM(text);
  };

  return (
    <div className={s.Dialogs}>
      <div className={s.itemDialogs}>{Items}</div>
      <div className={s.Messages}>
        {Messagef}
        <input
          required
          type="text"
          value={props.mValue}
          onChange={getMessageText}
          placeholder="Введите сообщение..."
          ref={getMessageg}
        />
        <input type="submit" onClick={sub} value="Отправить" />
      </div>
    </div>
  );
};
export default Dialogs;
