import { NavLink } from 'react-router-dom';
import Pikachu from '../../assets/images/Pikachu.png';
import s from './style/Header.module.css';
const Header = () => (
  <header className={s.header}>
    <div className={s.Pikachu}>
      <img src={Pikachu} alt="pc" />
      <span className={s.NH}>PIKACHU</span>
    </div>
  </header>
);
export default Header;
