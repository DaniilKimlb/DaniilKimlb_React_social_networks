import s from './MyPost.module.css';
import Post from './Post/Post';

const MyPost = () => (
  <div className={s.MyPost}>
    <div> my post</div>
    <div>
      <input type="password" placeholder="Введите текст..." />
      <button>Оправить</button>
      <hr />
    </div>
    <Post message="It's my life!!!" like="48" />
    <Post message="How are you do?" like="15" />
  </div>
);
export default MyPost;
