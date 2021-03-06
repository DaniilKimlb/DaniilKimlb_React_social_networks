import { Field, reduxForm } from 'redux-form';
import React from 'react';
import avatarDefault from '../../../assets/images/manusericon.png';
import s from './MyPost.module.css';
import Post from './Post/Post';
import RenderDialogForm from './MyPostForm/MyPostForm';
import { MessagePoType } from '../../../types/types';

type PropsType = {
  deletePost: (id: number) => void;
  fullName: string;
  setPostClear: (formInfo: any, PostClear: string) => void;
  MessagePo: Array<MessagePoType>;
  avatar: string | null;
};
const MyPost: React.FC<PropsType> = ({ ...props }) => {
  // let createReactElement = React.createRef();
  const Messaq = [...props.MessagePo]
    .reverse()
    .map((m) => (
      <Post
        deletePost={props.deletePost}
        message={m.message}
        key={m.id}
        id={m.id}
        like={m.like}
        fullName={props.fullName}
        avatar={props.avatar}
      />
    ));
  const onSubmit = (FormInfo: any) => {
    props.setPostClear(FormInfo.post, 'MyPost');
  };
  return (
    <div className={s.MyPost}>
      <div className={s.getInfo}>
        <img src={props.avatar || avatarDefault} alt="#" />
        <RenderDialogForm onSubmit={onSubmit} />
      </div>
      {Messaq}
    </div>
  );
};
export default MyPost;
