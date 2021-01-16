import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux/es/redux';
import { getPost } from '../../../redux/ProfilePageReducer';
import MyPost from './MyPost';

let mapStateToProps = (state) => {
  return {
    MessagePo: state.ProfilePage.MessagePo,
  };
};

export default compose(connect(mapStateToProps, { getPost }))(MyPost);
