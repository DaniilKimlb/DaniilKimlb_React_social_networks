import { createField } from '../../../Form/FormControls';
import s from '../Profile.module.css';

const ContactsForm = (props) => {
  const arrContacts = Object.keys(props.contacts);

  return (
    <ul>
      <div className={s.heading}>Contact</div>
      {arrContacts.map((c) => (
        <li>
          <span className={s.preStatus}>{c}: </span>
          {createField('input', `contacts.${c}`, 'text')}
        </li>
      ))}
    </ul>
  );
};
export default ContactsForm;
