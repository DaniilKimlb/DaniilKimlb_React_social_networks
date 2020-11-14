import s from './ProfileInf.module.css';
const ProfileInf = (props) => {
  return (
    <div>
      <div className={s.img}>
        <img src={props.img} />
      </div>
      <div className={s.avaInfo}>ava + de</div>
    </div>
  );
};
export default ProfileInf;
