import s from './MyPost.module.css';
import Post from './Post/Post';
const MessagPo = [
  { id: 1, message: "It's my life!!!", like: 48 },
  { id: 2, message: 'How are you do?', like: 15 },
];
const Messaq = MessagPo.map((m) => <Post message={m.message} like={m.like} />);

const MyPost = () => {
  // like.innerHTML = '<h1> afaf</h1>';
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
