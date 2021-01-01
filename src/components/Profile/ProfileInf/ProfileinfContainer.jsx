import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux/es/redux';
import { withAuthRedirect } from '../../../hoc/withAuthRedirect';
import { getProfile, getStatus } from '../../../redux/ProfilePageReducer';
import ProfileInf from './Profileinf';

class ProfileinfContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.usersId || this.props.id;
    this.props.getProfile(userId);
    this.props.getStatus(userId);
  }
  render() {
    return <ProfileInf {...this.props} status={this.props.status} />;
  }
}
const mapStateToProps = (state) => ({
  profile: state.ProfilePage.profile,
  id: state.Auth.userId,
  status: state.ProfilePage.status,
});
export default compose(
  connect(mapStateToProps, {
    getProfile,
    getStatus,
  }),
  withRouter,
  withAuthRedirect
)(ProfileinfContainer);
