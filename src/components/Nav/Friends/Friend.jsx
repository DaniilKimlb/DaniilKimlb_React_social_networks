import s from './Friends.module.css';

// let backgroundColor = 'background-color: blue';
const Friends = (props) => {
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
      <div class={s.Friend}> Friend</div>
      <div>{a}</div>
    </div>
  );
};

export default Friends;
