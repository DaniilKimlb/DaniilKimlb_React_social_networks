import { reduxForm } from 'redux-form';
import { createField } from '../../../Form/FormControls';
import s from '../Profile.module.css';

const ProfileStatusForm = (props) => {
  return (
    <div>
      {/* {props.aboutMe && ( */}
      <div>
        <ul>
          {' '}
          <div className={s.heading}>Introduction</div>
          <li>
            <span className={s.preStatus}>Full name: </span>

            {createField('input', 'fullName', 'text')}
          </li>
          <li>
            <span className={s.preStatus}>Looking for a job: </span>
            <span className={s.lookingForAJobCheckBox}>
              <label>
                <span>
                  {createField(
                    'input',
                    'lookingForAJob',
                    'radio',
                    null,
                    'true'
                  )}
                </span>
                <span>yes</span>
              </label>
              <label>
                <span>
                  {createField(
                    'input',
                    'lookingForAJob',
                    'radio',
                    null,
                    'false'
                  )}
                </span>
                <span>no</span>
              </label>
            </span>
          </li>
          <li>
            <span className={s.preStatus}>Professional skills: </span>
            {createField('input', 'lookingForAJobDescription', 'text')}
          </li>
          <li>
            <span className={s.preStatus}>About me : </span>
            {createField('input', 'aboutMe', 'text')}
          </li>
        </ul>
      </div>
    </div>
  );
};
export default ProfileStatusForm;
