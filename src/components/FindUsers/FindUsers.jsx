import s from './FindUsers.module.css';
const FindUsers = (props) => {
  if (props.users.length === 0) {
    props.setUsers([
      {
        id: 1,
        ava: 'https://cs16planet.ru/steam-avatars/images/avatar3219.jpg',
        follower: true,
        name: 'Ivan',
        status: "i'm Jesus sun is god ",
        live: { city: 'Kiev', country: 'Uk' },
      },
      {
        id: 2,
        ava: 'https://avatarko.ru/img/kartinka/2/Gubka_Bob.jpg',
        follower: false,
        name: 'Anton',
        status: 'jesus did not god ',
        live: { city: 'Nur-Sultan', country: 'KZ' },
      },
      {
        id: 3,
        ava: 'https://klike.net/uploads/posts/2019-03/1551511801_1.jpg',
        follower: true,
        name: 'Andrew',
        status: 'i am god ',
        live: { city: 'Moscow', country: 'Rus' },
      },
    ]);
  }
  return (
    <div>
      {props.users.map((m) => (
        <div key={m.id} className={s.wrapper}>
          <span className={s.ava}>
            <img className={s.ava} src={m.ava} alt="#" />
            <span className={s.info}>
              <span className={s.name}> {m.name}</span>
              <div className={s.status}>{m.status}</div>
            </span>
            <div className={s.live}>
              <span className={s.country}>{m.live.country}, </span>
              <span className={s.city}>{m.live.city} </span>
            </div>
          </span>
          <div className={s.but}>
            {m.follower ? (
              <button
                className={s.but}
                onClick={() => {
                  props.onFollow(m.id);
                }}
              >
                Unfollower
              </button>
            ) : (
              <button className={s.but} onClick={() => props.follow(m.id)}>
                follower
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};
export default FindUsers;
