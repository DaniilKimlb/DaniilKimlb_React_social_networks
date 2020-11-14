import s from './MyPost.module.css';
import Post from './Post/Post';
const MessagPo = [
  { id: 1, message: "It's my life!!!", like: 48 },
  { id: 2, message: 'How are you do?', like: 15 },
];

const MyPost = () => {
  // like.innerHTML = '<h1> afaf</h1>';
  return (
    <div className={s.MyPost}>
      <div> my post</div>
      <div className={s.getInfo}>
        <input type="text" placeholder="Введите текст..." />
        <button>Оправить</button>
      </div>
      <Post message={MessagPo[0].message} like={MessagPo[0].like} />
      <Post message={MessagPo[1].message} like={MessagPo[1].like} />
    </div>
  );
};
export default MyPost;
