import React from 'react';
import { connect } from 'react-redux';
import {
  follow,
  isPreloader,
  onFollow,
  setCurrentPage,
  setUsers,
  setUsersTotalCount,
  isFollowing,
} from '../../redux/UsersPageReducer';
import Users from './Users';
import Preloader from '../Preloader/Preloader';
import { usersAPI } from '../../API/API';
// ========================
class UsersAPIComponent extends React.Component {
  componentDidMount() {
    this.props.isPreloader(true);
    usersAPI
      .getUsers(this.props.pageSize, this.props.currentPage)
      .then((data) => {
        this.props.isPreloader(false);
        this.props.setUsers(data.items);
        this.props.setUsersTotalCount(data.totalCount);
      });
  }
  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    this.props.isPreloader(true);

    usersAPI.getUsers(this.props.pageSize, pageNumber).then((data) => {
      this.props.isPreloader(false);
      this.props.setUsers(data.items);
    });
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
          onFollow={this.props.onFollow}
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

export default connect(mapStateToProps, {
  follow,
  onFollow,
  setUsers,
  setCurrentPage,
  setUsersTotalCount,
  isPreloader,
  isFollowing,
})(UsersAPIComponent);
