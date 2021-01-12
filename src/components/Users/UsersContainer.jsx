import React from 'react';
import { connect } from 'react-redux';
import {
  requestUsers,
  follow,
  isPreloader,
  unfollow,
  setCurrentPage,
  setUsers,
  setUsersTotalCount,
  isFollowing,
} from '../../redux/UsersPageReducer';
import Users from './Users';
import Preloader from '../Preloader/Preloader';
import { usersAPI } from '../../API/API';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux/es/redux';
import {
  getCurrentPage,
  getFollowingInProgress,
  getIsFetching,
  getPageSize,
  getTotalUserCount,
  getUsers,
} from '../../redux/users-selectors';
// ========================
class UsersAPIComponent extends React.Component {
  componentDidMount() {
    this.props.requestUsers(this.props.pageSize, this.props.currentPage);
  }
  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    this.props.requestUsers(this.props.pageSize, pageNumber);
  };
  render() {
    return (
      <>
        {this.props.isFetching ? <Preloader /> : null}
        <Users
          totalUserCount={this.props.totalUserCount}
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
          users={this.props.users}
          unfollow={this.props.unfollow}
          follow={this.props.follow}
          onPageChanged={this.onPageChanged}
          followingInProgress={this.props.followingInProgress}
          isFollowing={this.props.isFollowing}
        />
      </>
    );
  }
}

// ========================
let mapStateToProps = (state) => {
  return {
    users: getUsers(state),
    pageSize: getPageSize(state),
    totalUserCount: getTotalUserCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    followingInProgress: getFollowingInProgress(state),
  };
};
// let mapDispatchToProps = (dispatch) => {
//   return {
//     follow: (userId) => {
//       dispatch(FollowerAC(userId));
//     },
//     onFollow: (userId) => {
//       dispatch(OnFollowerAC(userId));
//     },
//     setUsers: (users) => {
//       dispatch(setUsersAC(users));
//     },
//     setCurrentPage: (currentPage) => {
//       dispatch(setCurrentPageAC(currentPage));
//     },
//     setUsersTotalCount: (TotalCount) => {
//       dispatch(setUsersTotalCountAC(TotalCount));
//     },
//     isPreloader: (isFetching) => {
//       dispatch(isFetchingAC(isFetching));
//     },
//   };
// };
export default compose(
  connect(mapStateToProps, {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setUsersTotalCount,
    isPreloader,
    isFollowing,
    requestUsers,
  })
  // withAuthRedirect
)(UsersAPIComponent);
