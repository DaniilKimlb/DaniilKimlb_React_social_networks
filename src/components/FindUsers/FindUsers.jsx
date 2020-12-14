import React from 'react';
import userPhoto from '../../assets/images/manusericon.png';
import * as axios from 'axios';
import s from './FindUsers.module.css';
class FindUsers extends React.Component {
  constructor(props) {
    super(props);
    axios
      .get('https://social-network.samuraijs.com/api/1.0/users?count=4&page=1')
      .then((response) => this.props.setUsers(response.data.items));
  }

  render() {
    return (
      <div>
        {this.props.users.map((m) => (
          <div key={m.id} className={s.wrapper}>
            <span className={s.ava}>
              <img
                className={s.ava}
                src={m.photos.small || userPhoto}
                alt="#"
              />
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
                    this.props.onFollow(m.id);
                  }}
                >
                  Unfollower
                </button>
              ) : (
                <button
                  className={s.but}
                  onClick={() => this.props.follow(m.id)}
                >
                  follower
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    );
  }
}
export default FindUsers;
