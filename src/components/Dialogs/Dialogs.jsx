import React from 'react';
import s from './Dialogs.module.css';
const Dialogs = (props) => {
  let sub = () => {
    props.subL();
  };
  let getMessageText = (event) => {
    let text = event.target.value;
    props.getMessageTextL(text);
  };
  return (
    <div className={s.Dialogs}>
      <div className={s.itemDialogs}>{props.ItemsL}</div>
      <div className={s.Messages}>
        {props.MessagefL}
        <input
          className={s.inp}
          type="text"
          value={props.mValue}
          onChange={getMessageText}
          placeholder="Enter your message..."
          // ref={getMessageg}
        />
        <input className={s.but} type="submit" onClick={sub} value="send" />
      </div>
    </div>
  );
};
export default Dialogs;
