import React from 'react';
import { Field, reduxForm } from 'redux-form';
import s from './Dialogs.module.css';

const DialogsForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field
        component={'input'}
        className={s.inp}
        type={'text'}
        placeholder="Enter your message..."
        name={'text'}
      />
      <span className={s.but}>
        <button type={'submit'}>send</button>
      </span>
    </form>
  );
};
const RenderDialogForm = reduxForm({
  form: 'message',
})(DialogsForm);

export default RenderDialogForm;
