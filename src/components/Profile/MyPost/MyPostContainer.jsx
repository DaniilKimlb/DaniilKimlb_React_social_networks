import React from 'react';
import { connect } from 'react-redux';
import {
  GET_POST_ACTION_CREATE,
  GET_TEXT_ACTION_CREATE,
} from '../../../redux/ProfilePageReducer';
import MyPost from './MyPost';

let mapStateToProps = (state) => {
  return {
    ProfilePage: state.ProfilePage,
    pValue: state.ProfilePage.pValue,
  };
};
let mapDispatchToProps = (dispatch) => {
  return {
    l: () => {
      dispatch(GET_POST_ACTION_CREATE());
    },
    k: (text) => {
      dispatch(GET_TEXT_ACTION_CREATE(text));
    },
  };
};
let MyPostContainer = connect(mapStateToProps, mapDispatchToProps)(MyPost);

export default MyPostContainer;
