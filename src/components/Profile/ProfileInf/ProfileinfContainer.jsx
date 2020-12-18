import * as axios from 'axios';
import React from 'react';
import { connect } from 'react-redux';
import { setUsersProfile } from '../../../redux/ProfilePageReducer';
import ProfileInf from './Profileinf';
class Profileinf extends React.Component {
  componentDidMount() {
    axios
      .get('https://social-network.samuraijs.com/api/1.0/profile/2')
      .then((response) => this.props.setUsersProfile(response.data));
  }

  render() {
    return <ProfileInf {...this.props} profile={this.props.profile} />;
  }
}
const mapStateToProps = (state) => ({ profile: state.ProfilePage.profile });
export default connect(mapStateToProps, { setUsersProfile })(Profileinf);
