import React from 'react';
import s from './MyPost.module.css';
import { Field, reduxForm } from 'redux-form';
const MyPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field
        name={'post'}
        component={'textarea'}
        required
        type={'text'}
        placeholder="Enter text..."
        maxLength={'86'} //"550"
      />
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
