import React from 'react';
import { loginInfo } from '../../redux/authReducer';
import RenderLoginForm from './LoginForm';

const Login = (props) => {
  const onSubmit = (formData) => {
    console.log(formData);
    const { login, password, rememberMe } = formData;
    loginInfo(login, password, rememberMe);
  };
  return (
    <div>
      <h2>login</h2>
      <RenderLoginForm onSubmit={onSubmit} />
    </div>
  );
};
export default Login;
