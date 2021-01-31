import { reduxForm } from 'redux-form';
import { createField } from '../../../Form/FormControls';
import s from '../Profile.module.css';

const ProfileStatusForm = (props) => {
  return (
    <div>
      <div className={s.heading}>Introduction</div>
      {/* {props.aboutMe && ( */}
      <div>
        <form onSubmit={props.handleSubmit}>
          <span className={s.preStatus}>Full name: </span>
          {createField('input', 'fullName', 'text', 'Full name')}
        </form>
      </div>
      {/* )} */}
      {/* <div>
              <span className={s.preStatus}>Looking for a job: </span>
              {props.lookingForAJob ? 'yes' : 'no'}
  
              {props.lookingForAJobDescription && (
                <div>
                  <span className={s.preStatus}>Professional skills: </span>
                  {props.lookingForAJobDescription}
                </div>
              )}
            </div> */}
    </div>
  );
};
const ProfileStatusReduxForm = reduxForm({ form: 'profile' })(
  ProfileStatusForm
);
export default ProfileStatusReduxForm;
