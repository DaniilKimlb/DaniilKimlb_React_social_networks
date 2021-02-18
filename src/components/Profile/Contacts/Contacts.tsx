import React from 'react';
import { contactsType } from '../../../types/types';
import s from '../Profile.module.css';

const Contacts = ({ contact }: any) => {
  const arrContacts: Array<string> = [];
  for (let i in contact) {
    contact[i] !== null && arrContacts.push(contact[i]);
  }
  return arrContacts.length > 0 ? (
    <div className={s.contact}>
      <div className={s.heading}>Contacts</div>
      <div className={s.contacts}>
        <ul>
          {arrContacts.map((c: string) => (
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
  ) : (
    <></>
  );
};
export default Contacts;
