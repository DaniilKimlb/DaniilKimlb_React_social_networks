import s from '../Profile.module.css';

const Contacts = ({ contacts }) => {
  const arrContacts = [];
  for (let i in contacts) {
    contacts[i] !== null && arrContacts.push(contacts[i]);
  }

  return (
    arrContacts.length > 0 && (
      <div className={s.contact}>
        <div className={s.heading}>Contacts</div>
        <div className={s.contacts}>
          <ul>
            {arrContacts.map((c) => (
              <li>
                <a
                  href={c.includes('https://') ? c : 'https://' + c}
                  target="_blanc"
                >
                  {c.includes('https://') ? c.slice(8) : c}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  );
};
export default Contacts;
