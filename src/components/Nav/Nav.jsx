import { NavLink } from 'react-router-dom';
import Pikachu from '../../assets/images/Pikachu.png';
import FavouriteContainer from './Favourite/FavouriteContainer';
import s from './style/Nav.module.css';
const Nav = (props) => (
  <nav className={s.nav}>
    <div className={s.items}>
      <div className={s.title}>
        <span className={s.NH}>PIKACHU</span>
      </div>
      <div className={`${s.itemMenu}`}>MENU</div>
      <div className={s.item}>
        <NavLink to="/Profile" activeClassName={s.active}>
          Profile
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/Messages" activeClassName={s.active}>
          Messages
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/News" activeClassName={s.active}>
          News
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/Music" activeClassName={s.active}>
          Music
        </NavLink>
      </div>
      <div className={s.item + ' ' + s.FindUsers}>
        <NavLink to="/Users" activeClassName={s.active}>
          Users
        </NavLink>
      </div>
      <div className={`${s.item} ${s.setting}`}>
        <NavLink to="/Setting" activeClassName={s.active}>
          Settings
        </NavLink>
      </div>
      <FavouriteContainer />
    </div>
  </nav>
);
export default Nav;
