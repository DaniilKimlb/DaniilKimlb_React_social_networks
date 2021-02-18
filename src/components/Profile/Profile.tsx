import React, { useState } from 'react';
import s from './Profile.module.css';
import cap from '../../assets/images/5.png';
import avatarDefault from '../../assets/images/manusericon.png';
import ProfileStatus from './Status/ProfileStatus';
import Contacts from './Contacts/Contacts';
import MyPost from './MyPost/MyPost';
import Edit from './Edit';
import cn from 'classnames';
import { MessagePoType, profileType } from '../../types/types';
type PropsType = {
  profileUpdate: (status: boolean) => void;
  profile: profileType;
  id: number | null;
  status: string;
  IsContacts: boolean;
  updateProfile: (profile: profileType) => void;
  setPostClear: (formInfo: any, PostClear: string) => void;
  MessagePo: Array<MessagePoType>;
  savePhoto: (photos: any) => void;
  isOfter: boolean;
  updateStatus: (status: string) => void;
  profileUpdateComplete: boolean | null;
  deletePost: (id: number) => void;
};
const Profile: React.FC<PropsType> = ({ ...props }) => {
  const changePhoto = (event: any): void => {
    event.target.files.length && props.savePhoto(event.target.files[0]);
  };
  const [editMode, setEditMode] = useState(false);
  const [changeAvatar, setChangeAvatar] = useState(false);
  const onSubmit = (formData: any) => {
    props.updateProfile(formData);
  };
  return (
    <div className={s.ProfileInf}>
      <div className={s.title}>
        <span className={s.cap}>
          <img src={cap} alt="#" />
        </span>
        <span className={cn(s.avatar, { [s.setting]: props.isOfter })}>
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
            className={cn(s.edit, { [s.active]: editMode })}
            onClick={() => setEditMode(true)}
          >
            edit
          </span>
        )}
        <span className={cn(s.name, { [s.nameE]: props.isOfter })}>
          {props.profile.fullName}
        </span>
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
                profileUpdateComplete={props.profileUpdateComplete}
                contacts={props.profile.contacts}
                onSubmit={onSubmit}
              />
              <span className={s.cancel}>
                <button
                  onClick={() => {
                    setEditMode(false);
                    props.profileUpdate(false);
                  }}
                >
                  Cancel
                </button>
              </span>
            </div>
          ) : (
            <>
              <ProfileStatus
                status={props.status}
                aboutMe={props.profile.aboutMe}
                lookingForAJob={props.profile.lookingForAJob}
                lookingForAJobDescription={
                  props.profile.lookingForAJobDescription
                }
                updateStatus={props.updateStatus}
                isOfter={props.isOfter}
              />
              <Contacts contact={props.profile.contacts} />
            </>
          )}
        </div>
        <div className={s.right}>
          <MyPost
            deletePost={props.deletePost}
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
