import s from './MyPost.module.css';
import Post from './Post/Post';

const MyPost = (props) => {
  const Messaq = props.MessagePo.map((m) => (
    <Post message={m.message} like={m.like} />
  ));

  return (
    <div className={s.MyPost}>
      <h3> my post</h3>
      <div className={s.getInfo}>
        <input type="text" placeholder="Введите текст..." />
        <button>Оправить</button>
      </div>
      {Messaq}
    </div>
  );
};
export default MyPost;
