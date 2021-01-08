import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { login } from '../../redux/authReducer';
import RenderLoginForm from './LoginForm';

const Login = (props) => {
  const onSubmit = (formData) => {
    const { login, password, rememberMe } = formData;
    props.login(login, password, rememberMe);
  };

  return (
    <>
      {props.isAuth ? (
        <Redirect to="/Profile" />
      ) : (
        <div>
          <h2>login</h2>
          <RenderLoginForm onSubmit={onSubmit} />
        </div>
      )}
    </>
  );
};
const mapStateToProps = (state) => ({
  isAuth: state.Auth.isAuth,
});
export default connect(mapStateToProps, { login })(Login);
