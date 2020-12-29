import React from 'react';
import Preloader from '../../Preloader/Preloader';
import s from './ProfileInf.module.css';
import avatarDefoult from '../../../assets/images/manusericon.png';
import ProfileStatus from './ProfileStatus';
import Contact from './Contact';
class ProfileInf extends React.Component {
  state = {
    IsContacts: false,
  };
  ContactTrue() {
    this.setState({
      IsContacts: true,
    });
  }
  ContactFalse() {
    this.setState({
      IsContacts: false,
    });
  }

  render() {
    if (!this.props.profile) {
      return <Preloader />;
    }
    return (
      <div>
        <div className={s.img}>
          <img
            src="https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg"
            alt="#"
          />
        </div>
        <div className={s.infoAva}>
          <div className={s.ava}>
            <img
              src={this.props.profile.photos.large || avatarDefoult}
              alt="#"
            />
            {!this.state.IsContacts ? (
              <span>
                <button onClick={this.ContactTrue.bind(this)}>
                  show contacts
                </button>
              </span>
            ) : (
              <span className={s.down}>
                <button onClick={this.ContactFalse.bind(this)}>
                  hide contacts
                </button>
              </span>
            )}
          </div>
          <ProfileStatus {...this.props} status={'hi, my friend!!!'} />{' '}
          <Contact {...this.props} IsContacts={this.state.IsContacts} />
        </div>
      </div>
    );
  }
}
export default ProfileInf;
