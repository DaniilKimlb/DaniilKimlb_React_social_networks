import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux/es/redux';
import { withAuthRedirect } from '../../../hoc/withAuthRedirect';
import {
  getProfile,
  getStatus,
  updateStatus,
} from '../../../redux/ProfilePageReducer';
import ProfileInf from './Profileinf';

class ProfileinfContainer extends React.Component {
  componentDidMount() {
    this.props.getProfile(this.props.id || this.props.match.params.usersId);
  }
  componentDidUpdate(prevProps, prevState) {
    if (!this.props.match.params.usersId) {
      this.props.getProfile(this.props.id);
      this.props.getStatus(this.props.id);
    } else {
      this.props.getProfile(this.props.match.params.usersId);
      this.props.getStatus(this.props.match.params.usersId);
    }
  }
  render() {
    return (
      <ProfileInf
        {...this.props}
        status={this.props.status}
        updateStatus={this.props.updateStatus}
      />
    );
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
    updateStatus,
  }),
  withRouter
  // withAuthRedirect
)(ProfileinfContainer);
