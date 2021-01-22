import { Field, reduxForm } from 'redux-form';
import React from 'react';
import avatarDefault from '../../../assets/images/manusericon.png';
import s from './MyPost.module.css';
import Post from './Post/Post';
import RenderDialogForm from './MyPostForm/MyPostForm';
import Preloader from '../../Preloader/Preloader';
const MyPost = (props) => {
  console.log(props);
  // let createReactElement = React.createRef();
  const Messaq = [...props.MessagePo]
    .reverse()
    .map((m) => <Post message={m.message} key={m.id} like={m.like} />);
  const onSubmit = (FormInfo) => {
    props.getPost(FormInfo.post);
    FormInfo.post = '';
  };
  return (
    <div className={s.MyPost}>
      <div className={s.getInfo}>
        <img src={avatarDefault} alt="#" />
        <RenderDialogForm onSubmit={onSubmit} />
      </div>
      {Messaq}
    </div>
  );
};
export default MyPost;
