import MyPost from './MyPost/MyPost';
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
    <ProfileInf img="https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg" />
    <MyPost MessagePo={props.MessagePo} getPost={props.getPost} />
  </div>
);
export default Content;
