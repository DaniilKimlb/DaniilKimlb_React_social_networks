import React from 'react';
import * as axios from 'axios';
import { connect } from 'react-redux';
import {
  follow,
  isPreloader,
  onFollow,
  setCurrentPage,
  setUsers,
  setUsersTotalCount,
} from '../../redux/UsersPageReducer';
import Users from './Users';
import Preloader from '../Preloader/Preloader';
// ========================
class UsersAPIComponent extends React.Component {
  componentDidMount() {
    this.props.isPreloader(true);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${this.props.currentPage}`,
        {
          withCredentials: true,
        }
      )
      .then((response) => {
        this.props.isPreloader(false);
        this.props.setUsers(response.data.items);
        this.props.setUsersTotalCount(response.data.totalCount);
      });
  }
  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    this.props.isPreloader(true);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${pageNumber}`,
        {
          withCredentials: true,
        }
      )
      .then((response) => {
        this.props.isPreloader(false);
        this.props.setUsers(response.data.items);
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
})(UsersAPIComponent);
