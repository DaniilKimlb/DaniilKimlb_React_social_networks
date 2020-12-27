import React from 'react';
import { connect } from 'react-redux';
import { Redirect, withRouter } from 'react-router-dom';
import { timer } from '../../../API/API';
import { Contacts, getProfile } from '../../../redux/ProfilePageReducer';
import ProfileInf from './Profileinf';

class ProfileinfContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.usersId || this.props.id;
    this.props.getProfile(userId);
  }
  render() {
    if (!this.props.isAuth) {
      return <Redirect to="/Login" />;
    }

    return <ProfileInf {...this.props} />;
  }
}
let WithGetRouter = withRouter(ProfileinfContainer);
const mapStateToProps = (state) => ({
  profile: state.ProfilePage.profile,
  IsContacts: state.ProfilePage.IsContacts,
  id: state.Auth.userId,
  isAuth: state.Auth.isAuth,
});
export default connect(mapStateToProps, {
  Contacts,
  getProfile,
})(WithGetRouter);
