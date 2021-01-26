import React, { useState } from 'react';
import Pikachu from '../../assets/images/Pikachu.png';
import s from './style/Header.module.css';
import searchIcons from '../../assets/images/search.png';
import messageIcons from '../../assets/images/MessageIcon.png';
import notificationIcons from '../../assets/images/notification.png';
import { HeaderReduxForm } from './form/HeaderForm';
import avatarDefault from '../../assets/images/manusericon.png';

const Header = (props) => {
  const [menu, setMenu] = useState(false);
  const menuTrue = () => {
    setMenu(true);
  };
  const menuFalse = () => {
    setMenu(false);
  };
  const onSubmit = (formData) => {
    console.log(formData);
  };
  return (
    <header className={s.header}>
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
          {props.IsAuth ? (
            <span onClick={(menu && menuFalse) || (!menu && menuTrue)}>
              {' '}
              {props.login}
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
                  props.logout();
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
