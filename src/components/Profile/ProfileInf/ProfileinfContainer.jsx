import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux/es/redux';
import { withAuthRedirect } from '../../../hoc/withAuthRedirect';
import { getProfile } from '../../../redux/ProfilePageReducer';
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
const mapStateToProps = (state) => ({
  profile: state.ProfilePage.profile,
  id: state.Auth.userId,
});
export default compose(
  connect(mapStateToProps, {
    getProfile,
  }),
  withRouter,
  withAuthRedirect
)(ProfileinfContainer);
