import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';
import Friends from './Friend';
import s from './Friends.module.css';
// let backgroundColor = 'background-color: blue';
const FriendsContainer = (props) => {
  let state = props.store.getState().NavPage;
  let b = state.InfoFriends.filter((p) => p.status == true).reduce(
    (a, p) => p.id + a,
    0
  );
  let a = state.InfoFriends.map((f) => (
    <div
      className={s.FriendSt}
      title={`${f.name} is ${f.status ? 'online' : 'offline'} now`}
      style={{ backgroundColor: `${f.status ? 'green' : 'red'}` }}
    >
      <div className={s.Font}>{f.name}</div>
    </div>
  ));
  return <Friends a={a} b={b} />;
};

export default FriendsContainer;
