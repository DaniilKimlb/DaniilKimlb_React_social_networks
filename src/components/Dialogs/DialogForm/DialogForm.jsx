import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { FormControls } from '../../../Form/FormControls';
import { maxSymbols, required } from '../../../utility/Validation';
import s from '../Dialogs.module.css';
const maxLength = maxSymbols(300);
const FormInput = FormControls('input');
const DialogsForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field
        component={FormInput}
        className={s.inp}
        type={'text'}
        placeholder="Enter your message..."
        name={'text'}
        validate={[required, maxLength]}
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
