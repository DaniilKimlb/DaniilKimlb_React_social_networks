import * as axios from 'axios';
import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { setUsersProfile, Contacts } from '../../../redux/ProfilePageReducer';
import ProfileInf from './Profileinf';

class ProfileinfContainer extends React.Component {
  componentDidMount() {
    let usersId = this.props.match.params.usersId;
    if (!usersId) {
      usersId = 2;
    }
    axios
      .get('https://social-network.samuraijs.com/api/1.0/profile/' + usersId)
      .then((response) => this.props.setUsersProfile(response.data));
  }

  render() {
    return (
      <ProfileInf
        {...this.props}
        profile={this.props.profile}
        IsContacts={this.props.IsContacts}
      />
    );
  }
}
let WithGetRouter = withRouter(ProfileinfContainer);
const mapStateToProps = (state) => ({
  profile: state.ProfilePage.profile,
  IsContacts: state.ProfilePage.IsContacts,
});
export default connect(mapStateToProps, {
  setUsersProfile,
  Contacts,
})(WithGetRouter);