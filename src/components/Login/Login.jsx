import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { login } from '../../redux/authReducer';
import RenderLoginForm from './LoginForm';
import s from './Login.module.css';

const Login = (props) => {
  const onSubmit = (formData) => {
    console.log(formData);
    const { email, password, rememberMe } = formData;
    props.login(email, password, rememberMe);
  };

  return (
    <>
      {props.isAuth ? (
        <Redirect to="/Profile" />
      ) : (
        <div>
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
