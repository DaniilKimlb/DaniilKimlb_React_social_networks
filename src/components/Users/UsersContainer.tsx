import React, { useEffect } from 'react';
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
import {
  getCurrentPage,
  getFollowingInProgress,
  getIsFetching,
  getPageSize,
  getPortionSize,
  getTotalItemsCount,
  getUsers,
} from '../../redux/users-selectors';
import { usersType } from '../../types/types';
import { AppStateType } from '../../redux/state-Redux';
import { compose } from 'redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
// ========================
type MapStatePropsType = {
  users: Array<usersType>;
  pageSize: number;
  totalItemsCount: number;
  currentPage: number;
  isFetching: boolean;
  followingInProgress: any;
  portionSize: number;
};
type MapDispatchPropsType = {
  follow: (userId: number) => void;
  unfollow: (userId: number) => void;
  setUsers: (users: Array<usersType>) => void;
  setCurrentPage: (pageNumber: number) => void;
  setItemsTotalCount: (totalItemsCount: number) => void;
  isPreloader: (isFetching: boolean) => void;
  isFollowing: (isFol: boolean, userId: number) => void;
  requestUsers: (pageSize: number, pageNumber: number) => void;
};
type OwnPropsType = {
  onPageChanged: (pageNumber: any) => void;
};
type StateType = MapStatePropsType & MapDispatchPropsType & OwnPropsType;

const UsersAPIComponent: React.FC<StateType> = ({ ...props }) => {
  useEffect(() => {
    props.requestUsers(props.pageSize, props.currentPage);
  }, []);
  const onPageChanged = (pageNumber: any) => {
    props.setCurrentPage(pageNumber);
    props.requestUsers(props.pageSize, pageNumber);
  };

  return (
    <>
      {props.isFetching ? <Preloader /> : null}
      <Users
        totalItemsCount={props.totalItemsCount}
        pageSize={props.pageSize}
        currentPage={props.currentPage}
        users={props.users}
        unfollow={props.unfollow}
        follow={props.follow}
        onPageChanged={onPageChanged}
        followingInProgress={props.followingInProgress}
        isFollowing={props.isFollowing}
        portionSize={props.portionSize}
      />
    </>
  );
};

// ========================
const mapStateToProps = (state: AppStateType): MapStatePropsType => {
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
  withAuthRedirect,
  connect<MapStatePropsType, MapDispatchPropsType, OwnPropsType, AppStateType>(
    mapStateToProps,
    {
      follow,
      unfollow,
      setUsers,
      isPreloader,
      setItemsTotalCount,
      setCurrentPage,
      requestUsers,
      isFollowing,
    }
  )
)(UsersAPIComponent);
