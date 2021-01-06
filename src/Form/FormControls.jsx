import React from 'react';
import s from './FormControls.module.css';

export const FormControls = (Element) => ({ input, meta, ...props }) => {
  const mTError = meta.touched && meta.error;
  return (
    <>
      <div className={mTError && s.Form_error}>
        <Element {...input} {...props}></Element>
      </div>
      <div className={s.error}>{mTError}</div>{' '}
    </>
  );
};
