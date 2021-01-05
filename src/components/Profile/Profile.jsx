import { loginInfo } from '../../redux/authReducer';
import MyPostContainer from './MyPost/MyPostContainer';
import s from './Profile.module.css';
import ProfileinfContainer from './ProfileInf/ProfileinfContainer';

// console.log(s);
// const s = {
//   avaInfo: 'Profile_avaInfo__1Uk_n',
//   content: 'Profile_content__1byG_',
//   img: 'Profile_img__y_yQq',
//   item: 'Profile_item__1boul',
// };
const Content = (props) => {
  const onSubmit = (formData) => {
    loginInfo(formData);
  };

  return (
    <div className={s.content}>
      <ProfileinfContainer />
      <MyPostContainer />
    </div>
  );
};

export default Content;
