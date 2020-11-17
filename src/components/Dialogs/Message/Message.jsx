import s from './../Dialogs.module.css';
const Message = (props) => (
  <div className={props.id == 1 ? s.MessageOne : s.MessageTwo}>
    {props.message}
  </div>
);

export default Message;
