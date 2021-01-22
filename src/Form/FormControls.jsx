import React from 'react';
import { Field } from 'redux-form';
import s from './FormControls.module.css';

export const FormControls = (Element) => ({ input, meta, ...props }) => {
  const mTError = meta.touched && meta.error;
  return (
    <>
      {/* <div className={s.error}>{mTError}</div>{' '} */}
      <div className={mTError && s.Form_error}>
        <Element {...input} {...props}></Element>
      </div>
    </>
  );
};

export const createField = (component, name, type, placeholder, validate) => {
  return (
    <Field
      component={component}
      type={type}
      placeholder={placeholder}
      name={name}
      validate={validate}
    />
  );
};
