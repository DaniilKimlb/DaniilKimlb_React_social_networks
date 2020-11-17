import { NavLink } from 'react-router-dom';
import Friends from './Friends/Friend';
import s from './style/Nav.module.css';
const Nav = (props) => (
  <nav className={s.nav}>
    <div className={s.item}>
      <div className="">
        <NavLink to="/Profile" activeClassName={s.active}>
          Profile
        </NavLink>
      </div>
      <div className="">
        <NavLink to="/Messages" activeClassName={s.active}>
          Messages
        </NavLink>
      </div>
      <div>
        <NavLink to="/News" activeClassName={s.active}>
          News
        </NavLink>
      </div>
      <div>
        <NavLink to="/Music" activeClassName={s.active}>
          Music
        </NavLink>
      </div>
      <div className={`${s.item} ${s.setting}`}>
        <NavLink to="/Setting" activeClassName={s.active}>
          Settings
        </NavLink>
      </div>
      <Friends InfoFriends={props.InfoFriends} />
    </div>
  </nav>
);
export default Nav;
