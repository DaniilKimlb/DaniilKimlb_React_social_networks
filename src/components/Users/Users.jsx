import s from './Users.module.css';
import React from 'react';
import userPhoto from '../../assets/images/manusericon.png';
import * as axios from 'axios';
import { NavLink } from 'react-router-dom';
import { usersAPI } from '../../API/API';
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
              onClick={() => {
                return props.onPageChanged(p);
              }}
            >
              {p}
            </span>
          );
        })}
      </div>
      {props.users.map((m) => (
        <div key={m.id} className={s.wrapper}>
          <span className={s.ava}>
            <NavLink to={'/Profile' + '/' + m.id}>
              {' '}
              <img
                className={s.ava}
                src={m.photos.small || userPhoto}
                alt="#"
              />
            </NavLink>
            <span className={s.info}>
              <span className={s.name}>
                <NavLink to={'/Profile' + '/' + m.id}>{m.name}</NavLink>
              </span>
              <hr />
              <div className={s.status}>{m.status}</div>
            </span>
            <div className={s.live}>
              <span className={s.country}>{'m.live.country'} </span>
              <span className={s.city}>{'m.live.city'} </span>
            </div>
          </span>
          <div className={s.but}>
            {m.followed ? (
              <button
                disabled={props.followingInProgress.some((id) => id === m.id)}
                className={s.but}
                onClick={() => props.unfollow(m.id)}
              >
                Unfollower
              </button>
            ) : (
              <button
                className={s.but}
                disabled={props.followingInProgress.some((id) => id === m.id)}
                onClick={() => props.follow(m.id)}
              >
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
