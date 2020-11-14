import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css';
const ItemDialogs = (props) => {
  return (
    <div className={s.Dialog + ' ' + s.active}>
      <NavLink to={`/Messages/${props.id}`}>{props.name}</NavLink>
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

const Dialogs = (props) => (
  <div className={s.Dialogs}>
    <div className={s.itemDialogs}>
      <ItemDialogs name={ItemDialogsInf[0].name} id={ItemDialogsInf[0].id} />
      <ItemDialogs name={ItemDialogsInf[1].name} id={ItemDialogsInf[1].id} />
      <ItemDialogs name={ItemDialogsInf[2].name} id={ItemDialogsInf[2].id} />
      <ItemDialogs name={ItemDialogsInf[3].name} id={ItemDialogsInf[3].id} />
      <ItemDialogs name={ItemDialogsInf[4].name} id={ItemDialogsInf[4].id} />
    </div>
    <div className={s.Messages}>
      <Message message={MessageI[0].message} />
      <Message message={MessageI[1].message} />
      <Message message={MessageI[2].message} />
      <Message message={MessageI[3].message} />
      <Message message={MessageI[4].message} />
    </div>
  </div>
);
export default Dialogs;
