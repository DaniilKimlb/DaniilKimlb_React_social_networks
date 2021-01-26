import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom/cjs/react-router-dom.min';
import { compose } from 'redux/es/redux';
import MyPost from './MyPost/MyPost';
import s from './Profile.module.css';
import {
  getProfile,
  getStatus,
  updateStatus,
  setPostClear,
} from '../../redux/ProfilePageReducer';
import { useEffect } from 'react';
import ProfileInf from './ProfileInf/Profileinf';
import Preloader from '../Preloader/Preloader';
const Profile = (props) => {
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
      <ProfileInf
        profile={props.profile}
        id={props.id}
        status={props.status}
        isProfile={props.isProfile}
        updateStatus={props.updateStatus}
        setPostClear={props.setPostClear}
        MessagePo={props.MessagePo}
      />
    </div>
  );
};
const mapStateToProps = (state) => ({
  profile: state.ProfilePage.profile,
  id: state.Auth.userId,
  status: state.ProfilePage.status,
  isProfile: state.ProfilePage.isProfile,
  MessagePo: state.ProfilePage.MessagePo,
});
export default compose(
  connect(mapStateToProps, {
    getProfile,
    getStatus,
    updateStatus,
    setPostClear,
  }),
  withRouter
)(Profile);
