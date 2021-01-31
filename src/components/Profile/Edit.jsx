import s from './Profile.module.css';
import ProfileStatusReduxForm from './Status/ProfileStatusForm';
const Edit = () => {
  return (
    <div className={s.editMode}>
      <div className={s.heading}>Edit</div>
      <ProfileStatusReduxForm />
    </div>
  );
};
export default Edit;
