import React from 'react';
import s from './../MyPost.module.css';
import { Field, reduxForm } from 'redux-form';
import { required, maxSymbols } from '../../../../utility/Validation';
import { FormControls } from '../../../../Form/FormControls';
const maxLength = maxSymbols(86);
const FormTextArea = FormControls('textarea');
const MyPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field
        name={'post'}
        component={FormTextArea}
        type={'text'}
        placeholder="Enter text..."
        maxLength={'87'} //"550"
        validate={[required, maxLength]}
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
