import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css';
const ItemDialogs = (props) => {
  return (
    <div className={s.Dialog}>
      <NavLink className={s.Dialogm} to={`/Messages/${props.id}`}>
        {props.name}
      </NavLink>
    </div>
  );
};
const Message = (props) => <div className={s.Message}>{props.message}</div>;
const ItemDialogsInf = [
  { id: 1, name: 'Ivan' },
  { id: 2, name: 'Max' },
  { id: 3, name: 'Anton' },
  { id: 4, name: 'Grisha' },
  { id: 5, name: 'Misha' },
];
const MessageI = [
  { id: 1, message: 'Hi!' },
  { id: 2, message: 'How are do?' },
  { id: 3, message: 'Yo' },
  { id: 4, message: 'My' },
  { id: 5, message: 'Niggas' },
];
const Items = ItemDialogsInf.map((i) => (
  <ItemDialogs name={i.name} id={i.id} />
));
const Messagef = MessageI.map((m) => <Message message={m.message} />);
const Dialogs = (props) => (
  <div className={s.Dialogs}>
    <div className={s.itemDialogs}>{Items}</div>
    <div className={s.Messages}>{Messagef}</div>
  </div>
);
export default Dialogs;
