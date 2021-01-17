import React, { useState } from 'react';
import Pikachu from '../../assets/images/Pikachu.png';
import s from './style/Header.module.css';
import searchIcons from '../../assets/images/search.png';
import messageIcons from '../../assets/images/MessageIcon.png';
import notificationIcons from '../../assets/images/notification.png';
import { HeaderReduxForm } from './form/HeaderForm';
import avatarDefoult from '../../assets/images/manusericon.png';

const Header = (props) => {
  const [isa, setIsa] = useState(false);
  const isaTrue = () => {
    setIsa(true);
  };
  const isaFalse = () => {
    setIsa(false);
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
            <span onClick={(isa && isaFalse) || (!isa && isaTrue)}>
              {' '}
              {props.login}
              <img src={avatarDefoult} alt="#" />
              <span className={s.arrowToDown}>▼</span>{' '}
            </span>
          ) : (
            ''
            // <NavLink to="/Login">Login</NavLink>
          )}
          {isa && (
            <div className={s.menu}>
              <button
                onClick={() => {
                  props.logout();
                  isaFalse();
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
