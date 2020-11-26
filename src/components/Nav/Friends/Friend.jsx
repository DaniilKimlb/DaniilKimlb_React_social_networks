import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';
import s from './Friends.module.css';
// let backgroundColor = 'background-color: blue';
const Friends = (props) => {
  return (
    <div className={s.FriendNav}>
      <div class={s.Friend} title={`online now  ${props.b} people `}>
        Friend
      </div>
      <div>{props.a}</div>
    </div>
  );
};

export default Friends;
