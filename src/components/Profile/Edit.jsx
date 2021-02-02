import { reduxForm } from 'redux-form';
import ContactsForm from './Contacts/ContactsForm';
import s from './Profile.module.css';
import ProfileStatusReduxForm from './Status/ProfileStatusForm';
const Edit = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div className={s.heading + '  ' + s.editHeader}>Edit</div>
      {props.error &&<div className={s.error}>{props.error}</div>}
      <ProfileStatusReduxForm lookingForAJob={props.lookingForAJob} />
      <ContactsForm contacts={props.contacts} />
      <span className={s.save}>
        <button>save</button>
      </span>
    </form>
  );
};
const EditForm = reduxForm({ form: 'EditProfile' })(Edit);
export default EditForm;
