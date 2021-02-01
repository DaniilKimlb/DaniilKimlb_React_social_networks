import React, { useState } from 'react';
import s from './Profile.module.css';
import cap from '../../assets/images/5.png';
import avatarDefault from '../../assets/images/manusericon.png';
import ProfileStatus from './Status/ProfileStatus';
import Contacts from './Contacts/Contacts';
import MyPost from './MyPost/MyPost';
import ProfileStatusForm from './Status/ProfileStatusForm';
import Edit from './Edit';
const Profile = (props) => {
  const changePhoto = (event) => {
    event.target.files.length && props.savePhoto(event.target.files[0]);
  };
  const [editMode, setEditMode] = useState(false);
  const [changeAvatar, setChangeAvatar] = useState(false);
  const onSubmit = (formData) => {
    props.updateProfile(formData);
    console.log(formData);
  };
  return (
    <div className={s.ProfileInf}>
      <div className={s.title}>
        <span className={s.cap}>
          <img src={cap} alt="#" />
        </span>
        <span
          className={props.isOfter ? s.avatar + '  ' + s.setting : s.avatar}
        >
          <label>
            <img
              onMouseOver={() => props.isOfter && setChangeAvatar(true)}
              onMouseOut={() => setChangeAvatar(false)}
              src={props.profile.photos.large || avatarDefault}
              alt="#"
            />
            {props.isOfter && <input type="file" onChange={changePhoto} />}
          </label>
        </span>
        {props.isOfter && (
          <span
            className={`${s.edit}  ${editMode && s.active}`}
            onClick={() => setEditMode(true)}
          >
            edit
          </span>
        )}
        <span className={s.name}>{props.profile.fullName}</span>
        {changeAvatar && (
          <div className={s.changeAvatar}>Change your avatar</div>
        )}
      </div>
      <div className={s.wrapper}>
        <div className={s.left}>
          {editMode ? (
            <div className={s.editMode}>
              <Edit
                initialValues={props.profile}
                contacts={props.profile.contacts}
                onSubmit={onSubmit}
              />
              <span className={s.cancel}>
                <button onClick={() => setEditMode(false)}>Cancel</button>
              </span>
            </div>
          ) : (
            <>
              <ProfileStatus
                status={props.status}
                aboutMe={props.profile.aboutMe}
                lookingForAJob={props.profile.lookingForAJobDescription}
                lookingForAJobDescription={
                  props.profile.lookingForAJobDescription
                }
                updateStatus={props.updateStatus}
                isOfter={props.isOfter}
              />
              <Contacts contacts={props.profile.contacts} />
            </>
          )}
        </div>
        <div className={s.right}>
          <MyPost
            fullName={props.profile.fullName}
            setPostClear={props.setPostClear}
            MessagePo={props.MessagePo}
            avatar={props.profile.photos.large}
          />
        </div>
      </div>
    </div>
  );
};

export default Profile;
