import React from '../../../../node_modules/react';
import {
  GET_POST_ACTION_CREATE,
  GET_TEXT_ACTION_CREATE,
} from '../../../redux/ProfilePageReducer';
import s from './MyPost.module.css';
import Post from './Post/Post';
const MyPost = (props) => {
  // let createReactElement = React.createRef();
  let l = () => {
    props.ll();
  };

  let k = (event) => {
    let text = event.target.value;
    props.kl(text);
  };

  return (
    <div className={s.MyPost}>
      <h3> my post</h3>
      <div className={s.getInfo}>
        <input
          required
          type="text"
          onChange={k}
          placeholder="Enter text..."
          value={props.pValue}
        />
        <button onClick={l}>Send</button>
      </div>
      {props.Messaq}
    </div>
  );
};
export default MyPost;
