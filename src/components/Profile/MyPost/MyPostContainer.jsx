import React from 'react';
import {
  GET_POST_ACTION_CREATE,
  GET_TEXT_ACTION_CREATE,
} from '../../../redux/ProfilePageReducer';
import Message from '../../Dialogs/Message/Message';
import MyPost from './MyPost';
import s from './MyPost.module.css';
import Post from './Post/Post';
const MyPostContainer = (props) => {
  let state = props.store.getState().ProfilePage;

  const Messaq = state.MessagePo.map((m) => (
    <Post message={m.message} like={m.like} />
  ));
  let createReactElement = React.createRef();
  let l = () => {
    props.store.dispatch(GET_POST_ACTION_CREATE());
  };
  let k = (text) => {
    props.store.dispatch(GET_TEXT_ACTION_CREATE(text));
  };

  return <MyPost kl={k} ll={l} Messaq={Messaq} pValue={state.pValue} />;
};
export default MyPostContainer;
