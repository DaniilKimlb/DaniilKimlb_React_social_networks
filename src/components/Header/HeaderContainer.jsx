import { NavLink } from 'react-router-dom';
import React from 'react';
import * as axios from 'axios';
import { connect } from 'react-redux';
import Header from './Header';
import { UserData } from '../../redux/authReducer';
class HeaderContainer extends React.Component {
  componentDidMount() {
    axios
      .get('https://social-network.samuraijs.com/api/1.0/auth/me', {
        withCredentials: true,
      })
      .then((response) => {
        if (response.data.resultCode === 0) {
          const { id, login, email } = response.data.data;
          this.props.UserData(id, login, email);
        }
      });
  }

  render() {
    return <Header {...this.props} />;
  }
}
const mapStateToProps = (state) => ({
  IsAuth: state.Auth.isAuth,
  login: state.Auth.login,
});

export default connect(mapStateToProps, { UserData })(HeaderContainer);
