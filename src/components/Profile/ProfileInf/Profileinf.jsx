import React, { useState } from 'react';
import Preloader from '../../Preloader/Preloader';
import s from './ProfileInf.module.css';
import cap from '../../../assets/images/5.png';
import avatarDefault from '../../../assets/images/manusericon.png';
import ProfileStatus from './ProfileStatus';
import Contact from './Contact';
const ProfileInf = (props) => {
  const [IsContacts, SetIsContact] = useState(false);
  if (!props.profile) {
    return <Preloader />;
  }
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
      <ProfileStatus {...props} />
      <Contact {...props} />
    </div>
  );
};

export default ProfileInf;
