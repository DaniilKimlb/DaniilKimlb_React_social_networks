import React from 'react';
import { NavLink } from 'react-router-dom';
import Pikachu from '../../assets/images/Pikachu.png';
import s from './style/Header.module.css';
class Header extends React.Component {
  state = {
    isa: false,
  };
  isaTrue = () => {
    this.setState({
      isa: true,
    });
  };
  isaFalse = () => {
    this.setState({
      isa: false,
    });
  };
  render() {
    return (
      <header className={s.header}>
        <div className={s.Pikachu}>
          <img src={Pikachu} alt="pc" />
          <span className={s.NH}>PIKACHU</span>
        </div>
        <div className={s.l}>
          <div className={s.login}>
            {this.props.IsAuth ? (
              <span
                onClick={
                  (this.state.isa && this.isaFalse) ||
                  (!this.state.isa && this.isaTrue)
                }
              >
                {' '}
                {this.props.login}{' '}
              </span>
            ) : (
              ''
              // <NavLink to="/Login">Login</NavLink>
            )}
            {this.state.isa && (
              <div className={s.menu}>
                <button
                  onClick={() => {
                    this.props.logout();
                    this.isaFalse();
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
  }
}
export default Header;
