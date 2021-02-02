import { createField,FormControls } from '../../../Form/FormControls';
import s from '../Profile.module.css'; 
const ContactsForm = (props) => {
  const arrContacts = Object.keys(props.contacts);
const FormControlsInput = FormControls('input')
  return (
    <ul>
      <div className={s.heading}>Contacts</div>
      {arrContacts.map((c) => (
        <li>
          <span className={s.preStatus}>{c}: </span>
          {createField(FormControlsInput, `contacts.${c}`, 'text')}
        </li>
      ))}
    </ul>
  );
};
export default ContactsForm;
