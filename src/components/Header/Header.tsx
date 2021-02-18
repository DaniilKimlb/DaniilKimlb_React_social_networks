import React, { useState } from 'react';
import s from './style/Header.module.css';
import searchIcons from '../../assets/images/search.png';
import messageIcons from '../../assets/images/MessageIcon.png';
import notificationIcons from '../../assets/images/notification.png';
import { HeaderReduxForm } from './form/HeaderForm';
import avatarDefault from '../../assets/images/manusericon.png';
import cn from 'classnames';
type PropsType = {
  IsAuth: boolean;
  login: string | null;
  logout: () => void;
};
const Header: React.FC<PropsType> = ({ IsAuth, login, logout }) => {
  const [menu, setMenu] = useState(false);
  const menuTrue = () => {
    setMenu(true);
  };
  const menuFalse = () => {
    setMenu(false);
  };
  const onSubmit = (formData: any) => {
    console.log(formData);
  };
  return (
    <header className={s.header} id="header">
      <span className={s.search}>
        <img src={searchIcons} alt="#" />
        <HeaderReduxForm onSubmit={onSubmit} />
      </span>

      <span className={s.messageIcons}>
        <a href="#">
          <img src={messageIcons} alt="#" />
        </a>
      </span>
      <span className={s.notificationIcons}>
        <a href="#">
          <img src={notificationIcons} alt="#" />
        </a>
      </span>
      <div className={s.l}>
        <div className={s.login}>
          {IsAuth ? (
            <span
              onClick={(event: React.MouseEvent<HTMLInputElement>) =>
                (menu && menuFalse()) || (!menu && menuTrue())
              }
            >
              {' '}
              {login}
              <img src={avatarDefault} alt="#" />
              <span className={s.arrowToDown}>▼</span>{' '}
            </span>
          ) : (
            ''
            // <NavLink to="/Login">Login</NavLink>
          )}
          {menu && (
            <div className={s.menu}>
              <button
                onClick={() => {
                  logout();
                  menuFalse();
                }}
              >
                logout
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
