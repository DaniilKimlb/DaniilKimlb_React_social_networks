import React from 'react';
import s from './ProfileInf.module.css';

class ProfileStatus extends React.Component {
  state = {
    editMode: false,
  };
  activateEditMode() {
    this.setState({
      editMode: true,
    });
  }
  disableEditMode() {
    this.setState({
      editMode: false,
    });
  }
  render() {
    return (
      <div className={s.info}>
        <div className={s.ia}>
          <div className={s.UserName}>{this.props.profile.fullName}</div>
          <div className={s.status}>
            {!this.state.editMode && (
              <span onClick={this.activateEditMode.bind(this)}>
                {this.props.status}
              </span>
            )}
            {this.state.editMode && (
              <input
                autoFocus={true}
                onBlur={this.disableEditMode.bind(this)}
                type="text"
                value={this.props.status}
              />
            )}
          </div>
          <div className={s.AboutMe}>
            <hr />
            {this.props.profile.aboutMe || " didn't tell"}
            <hr />
          </div>
          <div className={s.jobstatus}>
            {this.props.profile.lookingForAJob
              ? 'Looking for job'
              : ' Not looking for a job'}
            <br />
            {this.props.profile.lookingForAJobDescription
              ? this.props.profile.lookingForAJobDescription
              : ' '}
          </div>
        </div>
      </div>
    );
  }
}
export default ProfileStatus;

// ==============
