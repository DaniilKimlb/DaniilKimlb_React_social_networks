import React, { useEffect, useState } from 'react';
import s from './ProfileInf.module.css';

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
            <span onClick={activateEditMode}>{props.status || '...'}</span>
          )}
          {editMode && (
            <input
              onChange={onStatusChange}
              autoFocus={true}
              onBlur={disableEditMode}
              value={status}
            />
          )}
          {props.profile.aboutMe && (
            <div>
              <span className={s.preStatus}>About me: </span>

              {props.profile.aboutMe}
            </div>
          )}
          <div>
            {props.profile.lookingForAJob
              ? 'Looking for job'
              : ' Not looking for a job'}
            <br />
            {props.profile.lookingForAJobDescription
              ? props.profile.lookingForAJobDescription
              : ' '}
          </div>
        </div>
      </div>
      {/* 
        <div className={s.jobstatus}>
          {props.profile.lookingForAJob
            ? 'Looking for job'
            : ' Not looking for a job'}
          <br />
          {props.profile.lookingForAJobDescription
            ? props.profile.lookingForAJobDescription
            : ' '}
        </div>
      </div> */}
    </div>
  );
};

export default ProfileStatus;

// ==============
