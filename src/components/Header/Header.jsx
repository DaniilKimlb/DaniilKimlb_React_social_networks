import React, { useState } from 'react';
import Pikachu from '../../assets/images/Pikachu.png';
import s from './style/Header.module.css';
const Header = (props) => {
  const [isa, setIsa] = useState(false);
  const isaTrue = () => {
    setIsa(true);
  };
  const isaFalse = () => {
    setIsa(false);
  };
  return (
    <header className={s.header}>
      <div className={s.Pikachu}>
        <img src={Pikachu} alt="pc" />
        <span className={s.NH}>PIKACHU</span>
      </div>
      <div className={s.l}>
        <div className={s.login}>
          {props.IsAuth ? (
            <span onClick={(isa && isaFalse) || (!isa && isaTrue)}>
              {' '}
              {props.login}{' '}
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
