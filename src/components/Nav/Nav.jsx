import s from './style/Nav.module.css';
const Nav = () => (
  <nav className={s.nav}>
    <div className={s.item}>
      <div>Profile</div>
      <div>Messages</div>
      <div>News</div>
      <div>Music</div>
      <div className={`${s.item} ${s.setting}`}>Settings</div>
    </div>
  </nav>
);
export default Nav;
