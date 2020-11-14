import { NavLink } from 'react-router-dom';
import s from './style/Header.module.css';
const Header = () => (
  <header className={s.header}>
    <NavLink to="/News">
      <img
        src="https://pngicon.ru/file/uploads/putin-128x100.png"
        alt="Владимир Путин"
      />
    </NavLink>
  </header>
);
export default Header;
