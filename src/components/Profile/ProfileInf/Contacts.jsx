import s from './ProfileInf.module.css';

const Contacts = ({ contacts }) => {
  const arrContacts = [
    contacts.facebook,
    contacts.vk,
    contacts.twitter,
    contacts.instagram,
    contacts.github,
    contacts.mainLink,
    contacts.youtube,
    contacts.website,
  ];

  return (
    arrContacts.filter((c) => c !== null).length > 0 && (
      <div className={s.contact}>
        <div className={s.heading}>Contact</div>
        <div className={s.contacts}>
          <ul>
            {arrContacts
              .filter((c) => c !== null)
              .map((c) => (
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
