import React from 'react';
import { Field, reduxForm } from 'redux-form';
const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          component={'input'}
          type={'text'}
          placeholder="login"
          name={'login'}
        />
      </div>
      <div>
        <Field
          component={'input'}
          type={'password'}
          name={'password'}
          placeholder="password"
        />
      </div>
      <div>
        <Field component={'input'} type="checkbox" name={'rememberMe'} />
        remember me
      </div>
      <div>
        <button>Login</button>
      </div>
    </form>
  );
};
const RenderLoginForm = reduxForm({
  form: 'login',
})(LoginForm);
export default RenderLoginForm;
