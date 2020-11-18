import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';
import s from './Friends.module.css';
// let backgroundColor = 'background-color: blue';
const Friends = (props) => {
  let b = props.InfoFriends.filter((p) => p.status == true).reduce(
    (a, p) => p.id + a,
    0
  );
  let a = props.InfoFriends.map((f) => (
    <div
      className={s.FriendSt}
      title={`${f.name} is ${f.status ? 'online' : 'offline'} now`}
      style={{ backgroundColor: `${f.status ? 'green' : 'red'}` }}
    >
      <div className={s.Font}>{f.name}</div>
    </div>
  ));
  return (
    <div className={s.FriendNav}>
      <div class={s.Friend} title={`Сейчас онлайн ${b} человека `}>
        Friend
      </div>
      <div>{a}</div>
    </div>
  );
};

export default Friends;
