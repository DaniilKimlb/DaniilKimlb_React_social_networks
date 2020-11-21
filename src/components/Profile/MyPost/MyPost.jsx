import React from '../../../../node_modules/react';
import s from './MyPost.module.css';
import Post from './Post/Post';

const MyPost = (props) => {
  const Messaq = props.MessagePo.map((m) => (
    <Post message={m.message} like={m.like} />
  ));
  let createReactElement = React.createRef();
  let l = () => {
    props.dispatch({ type: 'GET-POST' });
  };

  let k = () => {
    let text = createReactElement.current.value;
    props.dispatch({ type: 'GET-TEXT', text: text });
  };

  return (
    <div className={s.MyPost}>
      <h3> my post</h3>
      <div className={s.getInfo}>
        <input
          required
          type="text"
          onChange={k}
          ref={createReactElement}
          placeholder="Введите текст..."
          value={props.pValue}
        />
        <button onClick={l}>Оправить</button>
      </div>
      {Messaq}
    </div>
  );
};
export default MyPost;
