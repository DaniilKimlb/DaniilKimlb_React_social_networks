import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { withAuthRedirect } from '../../../hoc/withAuthRedirect';
import { Contacts, getProfile } from '../../../redux/ProfilePageReducer';
import ProfileInf from './Profileinf';

class ProfileinfContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.usersId || this.props.id;
    this.props.getProfile(userId);
  }
  render() {
    return <ProfileInf {...this.props} />;
  }
}
let withAuth = withAuthRedirect(ProfileinfContainer);
let WithGetRouter = withRouter(withAuth);
const mapStateToProps = (state) => ({
  profile: state.ProfilePage.profile,
  IsContacts: state.ProfilePage.IsContacts,
  id: state.Auth.userId,
});
export default connect(mapStateToProps, {
  Contacts,
  getProfile,
})(WithGetRouter);
