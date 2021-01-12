import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux/es/redux';
import { getPost } from '../../../redux/ProfilePageReducer';
import MyPost from './MyPost';

let mapStateToProps = (state) => {
  return {
    ProfilePage: state.ProfilePage,
    pValue: state.ProfilePage.pValue,
  };
};

export default compose(connect(mapStateToProps, { getPost }))(MyPost);
