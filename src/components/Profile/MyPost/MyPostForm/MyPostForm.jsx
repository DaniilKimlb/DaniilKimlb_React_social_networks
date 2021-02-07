import React from 'react';
import s from './../MyPost.module.css';
import { reduxForm } from 'redux-form';
import { required } from '../../../../utility/Validation';
import { createField } from '../../../../Form/FormControls';
const MyPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      {createField('textarea', 'post', 'text', 'Enter text...', null, [
        required,
      ])}
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
