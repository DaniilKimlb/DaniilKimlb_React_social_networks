import s from './Post.module.css';

const Post = (props) => {
  let a = `  ${props.like} лайков`;
  return (
    <div className={s.posts}>
      <img
        className={s.img1}
        src="https://klike.net/uploads/posts/2019-03/1551511862_28.jpg"
      />

      {props.message}
      <div className={s.like} title={a}>
        <label>
          <img
            className={s.img2}
            src="https://pngicon.ru/file/uploads/like-128x128.png"
            alt="лайк"
          />
          <span>{props.like}</span>
        </label>
      </div>
    </div>
  );
};
export default Post;
