import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import s from './Profile.module.css';
import {
  profileUpdate,
  getProfile,
  getStatus,
  updateStatus,
  setPostClear,
  savePhoto,
  updateProfile,
  deletePost,
} from '../../redux/ProfilePageReducer';
import { useEffect } from 'react';
import Profile from './Profile';
import Preloader from '../Preloader/Preloader';
import { MessagePoType, profileType } from '../../types/types';
import { AppStateType } from '../../redux/state-Redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
type MapStatePropsType = {
  profile: profileType | null;
  id: number | null;
  status: string;
  IsContacts: boolean;
  MessagePo: Array<MessagePoType>;
  profileUpdateComplete: boolean | null;
  match?: any;
};
type MapDispatchPropsType = {
  profileUpdate: (updateProfile: boolean) => void;
  updateProfile: (profile: profileType) => void;
  setPostClear: (text: string, clearForm: string) => void;
  savePhoto: (photos: any) => void;
  updateStatus: (status: string) => void;
  getProfile: (userId: number) => void;
  deletePost: (id: number) => void;
  getStatus: (userId: number) => void;
};
type OwnPropsType = {
  one?: any;
};
type StateType = MapStatePropsType & MapDispatchPropsType;
const ProfileContainer: React.FC<StateType> = (props) => {
  let userID = props.match.params.usersId;
  useEffect(() => {
    if (!userID) {
      userID = props.id;
    }
    props.getProfile(userID);
    props.getStatus(userID);
  }, [userID]);
  if (!props.profile) {
    return <Preloader />;
  }
  return (
    <div className={s.content}>
      <Profile
        profileUpdate={props.profileUpdate}
        profile={props.profile}
        id={props.id}
        status={props.status}
        IsContacts={props.IsContacts}
        updateStatus={props.updateStatus}
        setPostClear={props.setPostClear}
        MessagePo={props.MessagePo}
        savePhoto={props.savePhoto}
        isOfter={!props.match.params.usersId}
        updateProfile={props.updateProfile}
        profileUpdateComplete={props.profileUpdateComplete}
        deletePost={props.deletePost}
      />
    </div>
  );
};
const mapStateToProps = (state: AppStateType): MapStatePropsType => ({
  profile: state.ProfilePage.profile,
  id: state.Auth.userId,
  status: state.ProfilePage.status,
  IsContacts: state.ProfilePage.IsContacts,
  MessagePo: state.ProfilePage.MessagePo,
  profileUpdateComplete: state.ProfilePage.profileUpdateComplete,
});
export default compose(
  withAuthRedirect,
  connect<MapStatePropsType, MapDispatchPropsType, OwnPropsType, AppStateType>(
    mapStateToProps,
    {
      getProfile,
      getStatus,
      updateStatus,
      setPostClear,
      savePhoto,
      updateProfile,
      deletePost,
      profileUpdate,
    }
  ),
  withRouter
)(ProfileContainer);
