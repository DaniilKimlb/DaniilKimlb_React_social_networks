import s from './ProfileInf.module.css';

const ProfileInf = (props) => {
  return (
    <div>
      <div className={s.img}>
        <img src="https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg" />
      </div>
      <div className={s.avaInfo}>ava + de</div>
    </div>
  );
};
export default ProfileInf;
