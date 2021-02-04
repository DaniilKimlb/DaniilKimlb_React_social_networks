import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { login } from '../../redux/authReducer';
import RenderLoginForm from './LoginForm';
import s from './Login.module.css';

const Login = (props) => {
  const onSubmit = (formData) => {
    const { email, password, rememberMe, captcha = null } = formData;
    props.login(email, password, rememberMe, captcha);
  };

  return (
    <>
      {props.isAuth ? (
        <Redirect to="/Profile" />
      ) : (
        <div>
          <RenderLoginForm onSubmit={onSubmit} captchaURL={props.captchaURL} />
        </div>
      )}
    </>
  );
};
const mapStateToProps = (state) => ({
  isAuth: state.Auth.isAuth,
  captchaURL: state.Auth.captchaURL,
});
export default connect(mapStateToProps, { login })(Login);
