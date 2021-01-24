import React from 'react';
import { connect } from 'react-redux';
import {
  requestUsers,
  follow,
  isPreloader,
  unfollow,
  setCurrentPage,
  setUsers,
  setItemsTotalCount,
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
  getPortionSize,
  getTotalItemsCount,
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
          totalItemsCount={this.props.totalItemsCount}
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
          users={this.props.users}
          unfollow={this.props.unfollow}
          follow={this.props.follow}
          onPageChanged={this.onPageChanged}
          followingInProgress={this.props.followingInProgress}
          isFollowing={this.props.isFollowing}
          portionSize={this.props.portionSize}
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
    totalItemsCount: getTotalItemsCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    followingInProgress: getFollowingInProgress(state),
    portionSize: getPortionSize(state),
  };
};
export default compose(
  connect(mapStateToProps, {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setItemsTotalCount,
    isPreloader,
    isFollowing,
    requestUsers,
  })
)(UsersAPIComponent);
