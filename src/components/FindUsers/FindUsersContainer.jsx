import { connect } from 'react-redux';
import {
  FollowerAC,
  OnFollowerAC,
  setCurrentPage,
  setCurrentPageAC,
  setUsersAC,
  setUsersTotalCountAC,
} from '../../redux/UsersPageReducer';
import FindUsers from './FindUsers';
let mapStateToProps = (state) => {
  return {
    users: state.UsersPage.users,
    pageSize: state.UsersPage.pageSize,
    totalUserCount: state.UsersPage.totalUserCount,
    currentPage: state.UsersPage.currentPage,
  };
};
let mapDispatchToProps = (dispatch) => {
  return {
    follow: (userId) => {
      dispatch(FollowerAC(userId));
    },
    onFollow: (userId) => {
      dispatch(OnFollowerAC(userId));
    },
    setUsers: (users) => {
      dispatch(setUsersAC(users));
    },
    setCurrentPage: (currentPage) => {
      dispatch(setCurrentPageAC(currentPage));
    },
    setUsersTotalCount: (TotalCount) => {
      dispatch(setUsersTotalCountAC(TotalCount));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FindUsers);
