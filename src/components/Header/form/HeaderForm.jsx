import { Field, reduxForm } from 'redux-form';
import React from 'react';
import { createField } from '../../../Form/FormControls';

const HeaderForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      {createField('input', 'search', null, 'Search')}
    </form>
  );
};

export const HeaderReduxForm = reduxForm({ form: 'header' })(HeaderForm);
