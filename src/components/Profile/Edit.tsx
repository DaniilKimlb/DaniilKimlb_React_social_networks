import { reduxForm } from 'redux-form';
import ContactsForm from './Contacts/ContactsForm';
import s from './Profile.module.css';
import ProfileStatusReduxForm from './Status/ProfileStatusForm';
import cn from 'classnames';
import { contactsType, profileType } from '../../types/types';
type PropsType = {
  profileUpdateComplete: boolean;
  contacts: contactsType;
  onSubmit: any;
  handleSubmit: any;
  lookingForAJob: boolean;
  initialValues: profileType;
};

const Edit: React.FC<PropsType> = ({ ...props }) => {
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
const EditForm = reduxForm<any, any>({ form: 'EditProfile' })(Edit);
export default EditForm;
