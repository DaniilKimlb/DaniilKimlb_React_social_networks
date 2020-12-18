import Preloader from '../../Preloader/Preloader';
import s from './ProfileInf.module.css';

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
      <div className={s.avaInfo}>
        <img src={props.profile.photos.large} alt="#" />
        <div className={s.info}>
          Имя: {props.profile.fullName}
          <br />О себе: {props.profile.aboutMe}
          <div className={s.jobstatus}>
            {props.profile.lookingForAJob ? 'Ищет работу' : ' не ищет работу'}:
            {' ' + props.profile.lookingForAJobDescription}
          </div>
          <div className={s.contacts}>
            Контакты:
            <a href={props.profile.contacts.facebook}> facebook </a>{' '}
            <a href={props.profile.contacts.vk}>vk </a>{' '}
            <a href={props.profile.contacts.twitter}>twitter </a>{' '}
            <a href={props.profile.contacts.instagram}>instagram </a>{' '}
            <a href={props.profile.contacts.github}>github</a> {/* </div> */}
          </div>
          <div />{' '}
        </div>
      </div>
    </div>
  );
};
export default ProfileInf;
