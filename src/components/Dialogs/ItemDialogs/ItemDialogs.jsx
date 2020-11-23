import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';
import s from './../Dialogs.module.css';
const ItemDialogs = (props) => {
  // debugger;
  return (
    <div title={props.name} className={s.Dialog}>
      <NavLink className={s.Dialogm} to={`/Messages/${props.id}`}>
        <img src={props.ava} /> {props.name}
      </NavLink>
    </div>
  );
};
export default ItemDialogs;
