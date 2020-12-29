import s from './ProfileInf.module.css';
const Contact = (props) => {
  return (
    <>
      {props.IsContacts && (
        <div className={s.contacts}>
          {props.profile.contacts.facebook ? (
            <a
              href={'https://' + props.profile.contacts.facebook}
              target="_blanc"
            >
              facebook{' '}
            </a>
          ) : (
            ' '
          )}
          {props.profile.contacts.vk ? (
            <a href={'https://' + props.profile.contacts.vk} target="_blanc">
              vk{' '}
            </a>
          ) : (
            ' '
          )}
          {props.profile.contacts.twitter ? (
            <a href={props.profile.contacts.twitter}>twitter </a>
          ) : (
            ' '
          )}
          {props.profile.contacts.instagram ? (
            <a
              href={'https://' + props.profile.contacts.instagram}
              target="_blanc"
            >
              instagram{' '}
            </a>
          ) : (
            ' '
          )}
          {props.profile.contacts.github ? (
            <a
              href={'https://' + props.profile.contacts.github}
              target="_blanc"
            >
              github{' '}
            </a>
          ) : (
            ' '
          )}
        </div>
      )}
    </>
  );
};
export default Contact;
