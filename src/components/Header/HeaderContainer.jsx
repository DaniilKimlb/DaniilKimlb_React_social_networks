import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import { authInfo, logout } from '../../redux/authReducer';
class HeaderContainer extends React.Component {
  componentDidMount() {
    this.props.authInfo();
  }

  render() {
    return <Header {...this.props} />;
  }
}
const mapStateToProps = (state) => ({
  IsAuth: state.Auth.isAuth,
  login: state.Auth.login,
});
export default connect(mapStateToProps, { authInfo, logout })(HeaderContainer);
