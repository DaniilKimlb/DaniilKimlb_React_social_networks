import React, { useState } from 'react';
import Preloader from '../../Preloader/Preloader';
import s from './ProfileInf.module.css';
import avatarDefoult from '../../../assets/images/manusericon.png';
import ProfileStatus from './ProfileStatus';
import Contact from './Contact';
const ProfileInf = (props) => {
  const [IsContacts, SetIsContact] = useState(false);
  if (!props.profile) {
    return <Preloader />;
  }
  return (
    <div>
      <div className={s.img}>
        <img
          src="https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg"
          alt="#"
        />
      </div>
      <div className={s.infoAva}>
        <div className={s.ava}>
          <img src={props.profile.photos.large || avatarDefoult} alt="#" />
          {!IsContacts ? (
            <span>
              <button onClick={() => SetIsContact(true)}>show contacts</button>
            </span>
          ) : (
            <span className={s.down}>
              <button onClick={() => SetIsContact(false)}>hide contacts</button>
            </span>
          )}
        </div>
        <ProfileStatus
          {...props}
          status={props.status}
          updateStatus={props.updateStatus}
        />{' '}
        <Contact {...props} IsContacts={IsContacts} />
      </div>
    </div>
  );
};

export default ProfileInf;
