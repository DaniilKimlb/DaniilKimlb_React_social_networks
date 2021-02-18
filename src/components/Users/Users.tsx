import s from './Users.module.css';
import React from 'react';
import userPhoto from '../../assets/images/manusericon.png';
import { NavLink } from 'react-router-dom';
import cn from 'classnames';
import PageCount from './PageCount';
import { usersType } from '../../types/types';

type PropsType = {
  users: Array<usersType>;
  pageSize: number;
  totalItemsCount: number;
  currentPage: number;
  followingInProgress?: any;
  portionSize: number;
  follow: (userId: number) => void;
  unfollow: (userId: number) => void;
  onPageChanged: (pageNumber: any) => void;
  isFollowing: (  isFol: boolean,
    userId: number) => void;
};

const Users: React.FC<PropsType> = ({ ...props }) => {
  return (
    <div>
      <PageCount
        portionSize={props.portionSize}
        totalItemsCount={props.totalItemsCount}
        pageSize={props.pageSize}
        currentPage={props.currentPage}
        onPageChanged={props.onPageChanged}
      />
      <div className={s.content}>
        {props.users.map((m) => (
          <div key={m.id} className={s.wrapper}>
            <span className={s.ava}>
              <NavLink to={'/Profile/' + m.id}>
                {' '}
                <img
                  className={s.ava}
                  src={m.photos.small || userPhoto}
                  alt="#"
                />
              </NavLink>
              <div className={s.info}>
                <span className={s.name}>
                  <NavLink to={'/Profile/' + m.id}>{m.name}</NavLink>
                </span>
                <hr />
                <div className={s.status}>{m.status}</div>
              </div>
            </span>
            {m.followed ? (
              <div className={cn(s.but, s.Unfollowed)}>
                <button
                  disabled={props.followingInProgress.some(
                    (id: number) => id === m.id
                  )}
                  onClick={() => props.unfollow(m.id)}
                >
                  Unfollower
                </button>
              </div>
            ) : (
              <div className={cn(s.but, s.followed)}>
                <button
                  className={s.but}
                  disabled={props.followingInProgress.some(
                    (id: number) => id === m.id
                  )}
                  onClick={() => props.follow(m.id)}
                >
                  follower
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
export default Users;
