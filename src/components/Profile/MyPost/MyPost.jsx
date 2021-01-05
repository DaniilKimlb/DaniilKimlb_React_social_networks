import { Field, reduxForm } from 'redux-form';
import React from '../../../../node_modules/react';
import s from './MyPost.module.css';
import Post from './Post/Post';
import RenderDialogForm from './MyPostForm';

const MyPost = (props) => {
  // let createReactElement = React.createRef();
  let state = props.ProfilePage;

  const Messaq = state.MessagePo.map((m) => (
    <Post message={m.message} key={m.id} like={m.like} />
  ));
  const onsubmit = (FormInfo) => {
    props.l(FormInfo.post);
    FormInfo.post = '';
  };
  return (
    <div className={s.MyPost}>
      <h3> my post</h3>
      <div className={s.getInfo}>
        <RenderDialogForm onSubmit={onsubmit} />
      </div>
      {Messaq}
    </div>
  );
};
export default MyPost;
