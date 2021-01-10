import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { FormControls } from '../../Form/FormControls';
import { maxSymbols, required } from '../../utility/Validation';
import s from './Login.module.css';
let FormInput = FormControls('input');
const LoginForm = (props) => {
  return (
    <div className={s.loginPage}>
      <div className={s.form}>
        <span className={s.title}>Login</span>
        {props.error && <div className={s.error}>{props.error}</div>}
        <form
          component={FormInput}
          className={s.loginForm}
          onSubmit={props.handleSubmit}
        >
          <Field
            component={FormInput}
            validate={[required]}
            type="text"
            name="email"
            placeholder="email"
          />
          <Field
            component={FormInput}
            validate={[required]}
            name="password"
            type="password"
            placeholder="password"
          />
          <div className={s.rememberMe}>
            <label>
              <Field component={'input'} type="checkbox" name="rememberMe" />
              remember me
            </label>
          </div>
          <div>
            <button>login</button>
          </div>
        </form>
      </div>
    </div>
  );
};
const RenderLoginForm = reduxForm({
  form: 'login',
})(LoginForm);
export default RenderLoginForm;
