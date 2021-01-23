import s from './ProfileInf.module.css';
const Contact = (props) => {
  return (
    <div className={s.contact}>
      <div className={s.heading}>Contact</div>
      <ul>
        <div className={s.contacts}>
          {props.contacts.facebook ? (
            <li>
              <a
                href={'https://' + props.contacts.facebook}
                target="_blanc"
              >
                facebook{' '}
              </a>
            </li>
          ) : (
            ' '
          )}
          {props.contacts.vk ? (
            <li>
              <a href={'https://' + props.contacts.vk} target="_blanc">
                vk{' '}
              </a>
            </li>
          ) : (
            ' '
          )}
          {props.contacts.twitter ? (
            <li>
              <a href={props.contacts.twitter}>twitter </a>
            </li>
          ) : (
            ' '
          )}
          {props.contacts.instagram ? (
            <li>
              <a
                href={'https://' + props.contacts.instagram}
                target="_blanc"
              >
                instagram{' '}
              </a>
            </li>
          ) : (
            ' '
          )}
          {props.contacts.github ? (
            <li>
              <a
                href={'https://' + props.contacts.github}
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
