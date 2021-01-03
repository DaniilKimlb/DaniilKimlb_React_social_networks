import React from 'react';
import s from './ProfileInf.module.css';

class ProfileStatus extends React.Component {
  state = {
    editMode: false,
    status: this.props.status,
  };
  activateEditMode = () => {
    this.setState({
      editMode: true,
    });
  };
  disableEditMode = () => {
    this.setState({
      editMode: false,
    });
    this.props.updateStatus(this.state.status);
  };
  onStatusChange = (e) => {
    this.setState({
      status: e.currentTarget.value,
    });
  };
  render() {
    return (
      <div className={s.info}>
        <div className={s.ia}>
          <div className={s.UserName}>{this.props.profile.fullName}</div>
          <div className={s.status}>
            {!this.state.editMode && (
              <span onClick={this.activateEditMode}>
                {this.props.status || '...'}
              </span>
            )}
            {this.state.editMode && (
              <input
                onChange={this.onStatusChange}
                autoFocus={true}
                onBlur={this.disableEditMode}
                value={this.state.status}
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
