import MyPost from './MyPost/MyPost';
import Post from './MyPost/Post/Post';
import s from './Profile.module.css';

console.log(s);
// const s = {
//   avaInfo: 'Profile_avaInfo__1Uk_n',
//   content: 'Profile_content__1byG_',
//   img: 'Profile_img__y_yQq',
//   item: 'Profile_item__1boul',
// };
const Content = () => (
  <div className={s.content}>
    <div className={s.img}>
      <img src="https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg" />
    </div>
    <div className={s.avaInfo}>ava + de</div>
    <MyPost />
    
  </div>
);
export default Content;
