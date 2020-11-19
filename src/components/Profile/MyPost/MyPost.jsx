import React from '../../../../node_modules/react';
import s from './MyPost.module.css';
import Post from './Post/Post';

const MyPost = (props) => {
  const Messaq = props.MessagePo.map((m) => (
    <Post message={m.message} like={m.like} />
  ));
  let createReactElement = React.createRef();
  let l = () => {
    props.getPost();
  };

  let k = () => {
    let text = createReactElement.current.value;
    props.getText(text);
  };
  let i = (
    <input
      required
      type="text"
      onChange={k}
      ref={createReactElement}
      placeholder="Введите текст..."
      value={props.pValue}
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
