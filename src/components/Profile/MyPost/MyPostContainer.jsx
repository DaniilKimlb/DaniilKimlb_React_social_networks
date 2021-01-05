import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux/es/redux';
import { GET_POST_ACTION_CREATE } from '../../../redux/ProfilePageReducer';
import MyPost from './MyPost';

let mapStateToProps = (state) => {
  return {
    ProfilePage: state.ProfilePage,
    pValue: state.ProfilePage.pValue,
  };
};
let mapDispatchToProps = (dispatch) => {
  return {
    l: (text) => {
      dispatch(GET_POST_ACTION_CREATE(text));
    },
  };
};
export default compose(connect(mapStateToProps, mapDispatchToProps))(MyPost);
