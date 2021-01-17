import { Field, reduxForm } from 'redux-form';
import React from 'react';

const HeaderForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field component={'input'} placeholder="Search" name={'search'} />
    </form>
  );
};

export const HeaderReduxForm = reduxForm({ form: 'header' })(HeaderForm);
