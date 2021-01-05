import React from 'react';
import RenderDialogForm from './DialogForm';
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

  const onSubmit = (formInfo) => {
    props.sub(formInfo.text);
    formInfo.text = '';
  };
  return (
    <div className={s.Dialogs}>
      <div className={s.itemDialogs}>{Items}</div>
      <div className={s.Messages}>
        {Messagef}
        <RenderDialogForm onSubmit={onSubmit} />
      </div>
    </div>
  );
};
export default Dialogs;
