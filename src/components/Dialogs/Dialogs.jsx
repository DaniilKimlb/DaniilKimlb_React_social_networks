import React from 'react';
import { Redirect } from 'react-router-dom';
import s from './Dialogs.module.css';
import ItemDialogs from './ItemDialogs/ItemDialogs';
import Message from './Message/Message';
const Dialogs = (props) => {
  const state = props.DialogPage;
  const Items = state.ItemDialogsInf.map((i) => (
    <ItemDialogs name={i.name} id={i.id} ava={i.ava} key={i.id} />
  ));
  const Messagef = state.MessageI.map((m) => (
    <Message message={m.message} id={m.id} key={m.id} />
  ));
  let sub = () => {
    props.sub();
  };
  let getMessageText = (event) => {
    let text = event.target.value;
    props.getMessageText(text);
  };

  if (!props.isAuth) {
    return <Redirect to="/Login" />;
  }
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
          placeholder="Enter your message..."
        />
        <input className={s.but} type="submit" onClick={sub} value="send" />
      </div>
    </div>
  );
};
export default Dialogs;
