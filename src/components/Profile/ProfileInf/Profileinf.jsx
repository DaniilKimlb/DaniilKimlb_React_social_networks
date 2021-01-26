import React, { useState } from 'react';
import Preloader from '../../Preloader/Preloader';
import s from './ProfileInf.module.css';
import cap from '../../../assets/images/5.png';
import avatarDefault from '../../../assets/images/manusericon.png';
import ProfileStatus from './ProfileStatus';
import Contacts from './Contacts';
import MyPost from '../MyPost/MyPost';
const ProfileInf = (props) => {
  return (
    <div className={s.ProfileInf}>
      <div className={s.title}>
        <span className={s.cap}>
          <img src={cap} alt="#" />
        </span>
        <span className={s.avatar}>
          <img src={props.profile.photos.large || avatarDefault} alt="#" />
        </span>
        <span className={s.name}>{props.profile.fullName}</span>
      </div>
      <div className={s.wrapper}>
        <div className={s.left}>
          <ProfileStatus
            status={props.status}
            aboutMe={props.profile.aboutMe}
            lookingForAJob={props.profile.lookingForAJobDescription}
            updateStatus={props.updateStatus}
          />
          <Contacts contacts={props.profile.contacts} />
        </div>
        <div className={s.right}>
          <MyPost
            setPostClear={props.setPostClear}
            MessagePo={props.MessagePo}
          />
        </div>
      </div>
    </div>
  );
};

export default ProfileInf;
