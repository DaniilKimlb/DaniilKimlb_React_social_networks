import s from './Post.module.css';
import avatarDefault from '../../../../assets/images/manusericon.png';

const Post = (props) => {
  let a = `  ${props.like} likes`;
  return (
    <div className={s.posts}>
      <img className={s.img1} src={props.avatar || avatarDefault} alt="#" />
      <span className={s.fullName}>{props.fullName}</span>
      <span className={s.deletePost} onClick={() => props.deletePost(props.id)}>
        X
      </span>
      <div className={s.message}>{props.message}</div>

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
