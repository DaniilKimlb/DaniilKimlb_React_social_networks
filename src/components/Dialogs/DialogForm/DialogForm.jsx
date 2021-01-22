import React from 'react';
import { reduxForm } from 'redux-form';
import { createField, FormControls } from '../../../Form/FormControls';
import { maxSymbols, required } from '../../../utility/Validation';
import s from '../Dialogs.module.css';
const maxLength = maxSymbols(300);
const FormInput = FormControls('input');
const DialogsForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <span className={s.inp}>
        {createField(FormInput, 'text', 'Enter your message...', 'text', [
          required,
          maxLength,
        ])}
      </span>
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
