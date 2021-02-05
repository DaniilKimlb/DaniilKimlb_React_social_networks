import { Field, reduxForm } from 'redux-form';
import { createField, FormControls } from '../../../Form/FormControls';
import { required } from '../../../utility/Validation';
import s from '../Profile.module.css';

const ProfileStatusForm = (props) => {
  const FormInput = FormControls('input');
  return (
    <div>
      {/* {props.aboutMe && ( */}
      <div>
        <ul>
          {' '}
          <div className={s.heading}>Introduction</div>
          <li>
            <span className={s.preStatus}>Full name: </span>

            {createField(FormInput, 'fullName', 'text', null, null, [required])}
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
                  {' '}
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
            {createField(
              FormInput,
              'lookingForAJobDescription',
              'text',
              null,
              null,
              [required]
            )}
          </li>
          <li>
            <span className={s.preStatus}>About me : </span>
            {createField(FormInput, 'aboutMe', 'text', null, null, [required])}
          </li>
        </ul>
      </div>
    </div>
  );
};
export default ProfileStatusForm;
