import React from '../../../../node_modules/react';
import s from './MyPost.module.css';
import Post from './Post/Post';

const MyPost = (props) => {
  const Messaq = props.MessagePo.map((m) => (
    <Post message={m.message} like={m.like} />
  ));
  let createReactElement = React.createRef();
  let l = () => {
    let newPost = createReactElement.current.value;
    props.getPost(newPost);
    createReactElement.current.value = '';
  };
  let i = (
    <input
      type="text"
      ref={createReactElement}
      placeholder="Введите текст..."
    />
  );

  return (
    <div className={s.MyPost}>
      <h3> my post</h3>
      <div className={s.getInfo}>
        {i}
        <button onClick={l}>Оправить</button>
      </div>
      {Messaq}
    </div>
  );
};
export default MyPost;
