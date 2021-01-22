import s from './ProfileInf.module.css';
const Contact = (props) => {
  return (
    <div className={s.contact}>
      <div className={s.heading}>Contact</div>
      <ul>
        <div className={s.contacts}>
          {props.profile.contacts.facebook ? (
            <li>
              <a
                href={'https://' + props.profile.contacts.facebook}
                target="_blanc"
              >
                facebook{' '}
              </a>
            </li>
          ) : (
            ' '
          )}
          {props.profile.contacts.vk ? (
            <li>
              <a href={'https://' + props.profile.contacts.vk} target="_blanc">
                vk{' '}
              </a>
            </li>
          ) : (
            ' '
          )}
          {props.profile.contacts.twitter ? (
            <li>
              <a href={props.profile.contacts.twitter}>twitter </a>
            </li>
          ) : (
            ' '
          )}
          {props.profile.contacts.instagram ? (
            <li>
              <a
                href={'https://' + props.profile.contacts.instagram}
                target="_blanc"
              >
                instagram{' '}
              </a>
            </li>
          ) : (
            ' '
          )}
          {props.profile.contacts.github ? (
            <li>
              <a
                href={'https://' + props.profile.contacts.github}
                target="_blanc"
              >
                github{' '}
              </a>
            </li>
          ) : (
            ' '
          )}
        </div>
      </ul>
    </div>
  );
};
export default Contact;
