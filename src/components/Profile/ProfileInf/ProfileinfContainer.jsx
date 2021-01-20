import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux/es/redux';
import { withAuthRedirect } from '../../../hoc/withAuthRedirect';
import { withPreloader } from '../../../hoc/withPreloader';
import {
  getProfile,
  getStatus,
  updateStatus,
} from '../../../redux/ProfilePageReducer';
import ProfileInf from './Profileinf';

const ProfileinfContainer = (props) => {
  let userID = props.match.params.usersId;
  useEffect(() => {
    if (!userID) {
      userID = props.id;
    }
    props.getProfile(userID);
    props.getStatus(userID);
  }, [userID]);
  return (
    <ProfileInf
      {...props}
      status={props.status}
      updateStatus={props.updateStatus}
    />
  );
};

const mapStateToProps = (state) => ({
  profile: state.ProfilePage.profile,
  id: state.Auth.userId,
  status: state.ProfilePage.status,
  isProfile: state.ProfilePage.isProfile,
});
export default compose(
  connect(mapStateToProps, {
    getProfile,
    getStatus,
    updateStatus,
  }),
  withRouter
  // withAuthRedirect
)(ProfileinfContainer);
