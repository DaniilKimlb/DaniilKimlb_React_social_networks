import s from './FindUsers.module.css';
import React from 'react';
import userPhoto from '../../assets/images/manusericon.png';
const Users = (props) => {
  const pagesCount = Math.ceil(props.totalUserCount / props.pageSize);
  const pages = [];
  for (let i = 1; i < pagesCount + 1; i++) {
    pages.push(i);
  }
  return (
    <div>
      <div className={s.pageCount}>
        {pages.map((p) => {
          return (
            <span
              className={` ${props.currentPage == p && s.pageSelection}`}
              onClick={() => props.onPageChanged(p)}
            >
              {p}
            </span>
          );
        })}
      </div>
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
export default Users;
