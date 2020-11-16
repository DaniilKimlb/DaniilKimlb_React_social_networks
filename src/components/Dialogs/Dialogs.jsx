import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css';
import ItemDialogs from './ItemDialogs/ItemDialogs';
const Message = (props) => <div className={s.Message}>{props.message}</div>;

const Dialogs = (props) => {
  const Items = props.ItemDialogsInf.map((i) => (
    <ItemDialogs name={i.name} id={i.id} />
  ));
  const Messagef = props.MessageI.map((m) => <Message message={m.message} />);
  return (
    <div className={s.Dialogs}>
      <div className={s.itemDialogs}>{Items}</div>
      <div className={s.Messages}>{Messagef}</div>
    </div>
  );
};
export default Dialogs;
