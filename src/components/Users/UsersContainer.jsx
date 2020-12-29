import React from 'react';
import { connect } from 'react-redux';
import {
  GetUsers,
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
// ========================
class UsersAPIComponent extends React.Component {
  componentDidMount() {
    this.props.GetUsers(this.props.pageSize, this.props.currentPage);
  }
  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    this.props.GetUsers(this.props.pageSize, pageNumber);
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
    users: state.UsersPage.users,
    pageSize: state.UsersPage.pageSize,
    totalUserCount: state.UsersPage.totalUserCount,
    currentPage: state.UsersPage.currentPage,
    isFetching: state.UsersPage.isFetching,
    followingInProgress: state.UsersPage.followingInProgress,
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
    GetUsers,
  }),
  withAuthRedirect
)(UsersAPIComponent);
