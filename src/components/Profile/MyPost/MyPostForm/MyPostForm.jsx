import React from 'react';
import s from './../MyPost.module.css';
import { Field, reduxForm } from 'redux-form';
import { required, maxSymbols } from '../../../../utility/Validation';
import { createField, FormControls } from '../../../../Form/FormControls';
const maxLength = maxSymbols(86);
const FormTextArea = FormControls('textarea');
const MyPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      {createField(FormTextArea, 'post', 'text', 'Enter text...', [required])}
      <div className={s.but}>
        <button>Send</button>
      </div>
    </form>
  );
};
const RenderDialogForm = reduxForm({
  form: 'MyPost',
})(MyPostForm);
export default RenderDialogForm;
