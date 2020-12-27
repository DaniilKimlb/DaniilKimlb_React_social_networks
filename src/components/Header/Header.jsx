import { NavLink } from 'react-router-dom';
import Pikachu from '../../assets/images/Pikachu.png';
import s from './style/Header.module.css';
const Header = (props) => {
  return (
    <header className={s.header}>
      <div className={s.Pikachu}>
        <img src={Pikachu} alt="pc" />
        <span className={s.NH}>PIKACHU</span>
      </div>
      <div className={s.l}>
        <div className={s.login}>
          {props.IsAuth ? props.login : <NavLink to="/Login">Login</NavLink>}
        </div>
      </div>
    </header>
  );
};
export default Header;
