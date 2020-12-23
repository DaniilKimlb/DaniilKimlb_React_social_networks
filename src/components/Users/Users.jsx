import s from './Users.module.css';
import React from 'react';
import userPhoto from '../../assets/images/manusericon.png';
import * as axios from 'axios';
import { NavLink } from 'react-router-dom';
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
            <NavLink to={'/Profile' + '/' + m.id}>
              {' '}
              <img
                className={s.ava}
                src={m.photos.small || userPhoto}
                alt="#"
              />
            </NavLink>
            <span className={s.info}>
              <span className={s.name}> {m.name}</span>
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
                className={s.but}
                onClick={() => {
                  axios
                    .delete(
                      'https://social-network.samuraijs.com/api/1.0//follow/' +
                        m.id,
                      {
                        withCredentials: true,
                        headers: {
                          'API-KEY': '191e4d5e-01b7-42e2-a42b-1d59a3aa3640',
                        },
                      }
                    )
                    .then((response) => {
                      if (response.data.resultCode === 0) {
                        props.onFollow(m.id);
                      }
                    });
                }}
              >
                Unfollower
              </button>
            ) : (
              <button
                className={s.but}
                onClick={() => {
                  axios
                    .post(
                      'https://social-network.samuraijs.com/api/1.0/follow/' +
                        m.id,
                      {},
                      {
                        withCredentials: true,
                        headers: {
                          'API-KEY': '191e4d5e-01b7-42e2-a42b-1d59a3aa3640',
                        },
                      }
                    )
                    .then((response) => {
                      if (response.data.resultCode === 0) {
                        props.follow(m.id);
                      }
                    });
                }}
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
