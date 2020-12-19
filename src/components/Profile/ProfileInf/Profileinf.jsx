import Preloader from '../../Preloader/Preloader';
import s from './ProfileInf.module.css';
import avatarDefoult from '../../../assets/images/manusericon.png';

const ProfileInf = (props) => {
  if (!props.profile) {
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
      <div className={s.ava}>
        <img src={props.profile.photos.large || avatarDefoult} alt="#" />
      </div>
      <div className={s.info}>
        <div className={s.UserName}>{props.profile.fullName}</div>
        <hr />
        <div className={s.AboutMe}>
          {props.profile.aboutMe || " didn't tell"}
          <hr />
        </div>
        <div className={s.jobstatus}>
          {props.profile.lookingForAJob
            ? 'Looking for job'
            : ' Not looking for a job'}
          {props.profile.lookingForAJobDescription
            ? ': ' + props.profile.lookingForAJobDescription
            : ' '}
        </div>
        <div className={s.contacts}>
          {props.profile.contacts.facebook ? (
            <a
              href={'https://' + props.profile.contacts.facebook}
              target="_blanc"
            >
              facebook{' '}
            </a>
          ) : (
            ' '
          )}
          {props.profile.contacts.vk ? (
            <a href={'https://' + props.profile.contacts.vk} target="_blanc">
              vk{' '}
            </a>
          ) : (
            ' '
          )}
          {props.profile.contacts.twitter ? (
            <a href={props.profile.contacts.twitter}>twitter </a>
          ) : (
            ' '
          )}
          {props.profile.contacts.instagram ? (
            <a
              href={'https://' + props.profile.contacts.instagram}
              target="_blanc"
            >
              instagram{' '}
            </a>
          ) : (
            ' '
          )}
          {props.profile.contacts.github ? (
            <a
              href={'https://' + props.profile.contacts.github}
              target="_blanc"
            >
              github{' '}
            </a>
          ) : (
            ' '
          )}
          {/* </div> */}
        </div>
        <div />{' '}
      </div>
    </div>
  );
};
export default ProfileInf;
