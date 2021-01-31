import React, { useEffect, useState } from 'react';
import s from '../Profile.module.css';

const ProfileStatus = (props) => {
  const [editMode, setEditMode] = useState(false);
  const [status, setStatus] = useState(props.status);
  const activateEditMode = () => {
    setEditMode(true);
  };
  const disableEditMode = () => {
    setEditMode(false);
    props.updateStatus(status);
  };
  const onStatusChange = (e) => {
    setStatus(e.currentTarget.value);
  };
  useEffect(() => {
    setStatus(props.status);
  }, [props.status]);

  return (
    <div className={s.info}>
      <div className={s.Introduction}>
        <div className={s.heading}>Introduction</div>

        <div className={s.status}>
          <span className={s.preStatus}>Status: </span>
          {!editMode && (
            <span onClick={props.isOfter && activateEditMode}>
              {props.status || '...'}
            </span>
          )}
          {props.isOfter && editMode && (
            <input
              onChange={onStatusChange}
              autoFocus={true}
              onBlur={disableEditMode}
              value={status}
            />
          )}
          {props.aboutMe && (
            <div>
              <span className={s.preStatus}>About me: </span>
              {props.aboutMe}
            </div>
          )}
          <div>
            <span className={s.preStatus}>Looking for a job: </span>
            {props.lookingForAJob ? 'yes' : 'no'}

            {props.lookingForAJobDescription && (
              <div>
                <span className={s.preStatus}>Professional skills: </span>
                {props.lookingForAJobDescription}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProfileStatus;
