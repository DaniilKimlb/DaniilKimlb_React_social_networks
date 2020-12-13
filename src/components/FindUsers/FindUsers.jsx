import userPhoto from '../../assets/images/manusericon.png';
import * as axios from 'axios';
import s from './FindUsers.module.css';
const FindUsers = (props) => {
  if (props.users.length === 0) {
    axios
      .get('https://social-network.samuraijs.com/api/1.0/users')
      .then((response) => props.setUsers(response.data.items));
  }

  return (
    <div>
      {props.users.map((m) => (
        <div key={m.id} className={s.wrapper}>
          <span className={s.ava}>
            <img className={s.ava} src={m.photos.small || userPhoto} alt="#" />
            <span className={s.info}>
              <span className={s.name}> {m.name}</span>
              <div className={s.status}>{m.status}</div>
            </span>
            <div className={s.live}>
              <span className={s.country}>{'m.live.country'}, </span>
              <span className={s.city}>{'m.live.city'} </span>
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
