import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';
import s from './../Dialogs.module.css';
const ItemDialogs = (props) => {
  return (
    <div className={s.Dialog}>
      <NavLink className={s.Dialogm} to={`/Messages/${props.id}`}>
        {props.name}
      </NavLink>
    </div>
  );
};
export default ItemDialogs;
