import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { Contacts, getProfile } from '../../../redux/ProfilePageReducer';
import ProfileInf from './Profileinf';

class ProfileinfContainer extends React.Component {
  componentDidMount() {
    let usersId = this.props.match.params.usersId;
    if (!usersId) {
      usersId = this.props.id;
    }
    this.props.getProfile(usersId);
  }
  render() {
    return <ProfileInf {...this.props} />;
  }
}
let WithGetRouter = withRouter(ProfileinfContainer);
const mapStateToProps = (state) => ({
  profile: state.ProfilePage.profile,
  IsContacts: state.ProfilePage.IsContacts,
  id: state.Auth.userId,
});
export default connect(mapStateToProps, {
  Contacts,
  getProfile,
})(WithGetRouter);
