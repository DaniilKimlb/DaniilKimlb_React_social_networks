import MyPost from './MyPost/MyPost';
import MyPostContainer from './MyPost/MyPostContainer';
import Post from './MyPost/Post/Post';
import s from './Profile.module.css';
import ProfileInf from './ProfileInf/Profileinf';

// console.log(s);
// const s = {
//   avaInfo: 'Profile_avaInfo__1Uk_n',
//   content: 'Profile_content__1byG_',
//   img: 'Profile_img__y_yQq',
//   item: 'Profile_item__1boul',
// };

const Content = (props) => (
  <div className={s.content}>
    <ProfileInf />
    <MyPostContainer store={props.store} />
  </div>
);
export default Content;
