import { NavLink } from 'react-router-dom';
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
  return (
    <div className={s.Dialogs}>
      <div className={s.itemDialogs}>{Items}</div>
      <div className={s.Messages}>{Messagef}</div>
    </div>
  );
};
export default Dialogs;
