import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { FormControls } from '../../Form/FormControls';
import { maxSymbols, required } from '../../utility/Validation';
const maxLength = maxSymbols(25);
let FormInput = FormControls('input');
const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          component={FormInput}
          type={'text'}
          placeholder="login"
          name={'login'}
          validate={[required, maxLength]}
        />
      </div>
      <div>
        <Field
          component={FormInput}
          type={'password'}
          name={'password'}
          placeholder="password"
          validate={[required, maxLength]}
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
