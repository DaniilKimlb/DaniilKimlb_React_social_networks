import { reduxForm } from 'redux-form';
import ContactsForm from './Contacts/ContactsForm';
import s from './Profile.module.css';
import ProfileStatusReduxForm from './Status/ProfileStatusForm';
import cn from 'classnames';
const Edit = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div className={cn(s.heading, s.editHeader)}>Edit</div>
      {props.profileUpdateComplete && (
        <div className={s.profileUpdateComplete}>The changes are saved</div>
      )}
      <ProfileStatusReduxForm lookingForAJob={props.lookingForAJob} />
      <ContactsForm contacts={props.contacts} />
      <span className={s.save}>
        <button>Save</button>
      </span>
    </form>
  );
};
const EditForm = reduxForm({ form: 'EditProfile' })(Edit);
export default EditForm;
