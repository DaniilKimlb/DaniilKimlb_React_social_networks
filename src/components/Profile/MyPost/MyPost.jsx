import React from '../../../../node_modules/react';
import {
  GET_POST_ACTION_CREATE,
  GET_TEXT_ACTION_CREATE,
} from '../../../redux/ProfilePageReducer';
import s from './MyPost.module.css';
import Post from './Post/Post';
const MyPost = (props) => {
  // let createReactElement = React.createRef();
  let state = props.ProfilePage;
  let l = () => {
    props.l();
  };
  const Messaq = state.MessagePo.map((m) => (
    <Post message={m.message} key={m.id} like={m.like} />
  ));

  let k = (event) => {
    let text = event.target.value;
    props.k(text);
  };

  return (
    <div className={s.MyPost}>
      <h3> my post</h3>
      <div className={s.getInfo}>
        <textarea
          required
          type="text"
          onChange={k}
          placeholder="Enter text..."
          value={props.pValue}
        ></textarea>
        <div className={s.but}>
          <input type="button" onClick={l} value="Send" />
        </div>
      </div>
      {Messaq}
    </div>
  );
};
export default MyPost;
