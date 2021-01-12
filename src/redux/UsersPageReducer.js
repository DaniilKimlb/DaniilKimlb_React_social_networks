import { usersAPI } from '../API/API';

const FOLLOWER = 'FOLLOWER';
const ONFOLLOWER = 'ONFOLLOWER';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_USERS_TOTAL_COUNT = 'SET_USERS_TOTAL_COUNT';
const IS_FETCHING = 'IS_FETCHING';
const IS_FOLLOWING = 'IS_FOLLOWING';
const initialState = {
  users: [],
  pageSize: 4,
  totalUserCount: 0,
  currentPage: 1,
  isFetching: false,
  followingInProgress: [],
};
const UsersPageReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOWER:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: true };
          }
          return u;
        }),
      };
    case ONFOLLOWER:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: false };
          }
          return u;
        }),
      };
    case SET_USERS:
      return { ...state, users: action.users };
    case SET_CURRENT_PAGE:
      return { ...state, currentPage: action.currentPage };
    case SET_USERS_TOTAL_COUNT:
      return { ...state, totalUserCount: action.totalUserCount };
    case IS_FETCHING:
      return { ...state, isFetching: action.isFetching };
    case IS_FOLLOWING:
      return {
        ...state,
        followingInProgress: action.isFol
          ? [...state.followingInProgress, action.userId]
          : state.followingInProgress.filter((id) => id !== action.userId),
      };
    default:
      return state;
  }
};
export const followSuccess = (userId) => ({ type: FOLLOWER, userId });
export const UnfollowSuccess = (userId) => ({
  type: ONFOLLOWER,
  userId,
});
export const setUsers = (users) => ({ type: SET_USERS, users });
export const setCurrentPage = (currentPage) => ({
  type: SET_CURRENT_PAGE,
  currentPage,
});
export const setUsersTotalCount = (totalUserCount) => ({
  type: SET_USERS_TOTAL_COUNT,
  totalUserCount,
});
export const isPreloader = (isFetching) => ({
  type: IS_FETCHING,
  isFetching,
});
export const isFollowing = (isFol, userId) => ({
  type: IS_FOLLOWING,
  isFol,
  userId,
});
export const requestUsers = (pageSize, currentPage) => {
  return (dispatch) => {
    dispatch(isPreloader(true));
    usersAPI.getUsers(pageSize, currentPage).then((data) => {
      dispatch(isPreloader(false));
      dispatch(setUsers(data.items));
      dispatch(setUsersTotalCount(data.totalCount));
    });
  };
};
export const unfollow = (userId) => {
  return (dispatch) => {
    dispatch(isFollowing(true, userId));
    usersAPI.Unfollower(userId).then((data) => {
      if (data.resultCode === 0) {
        dispatch(UnfollowSuccess(userId));
      }
      dispatch(isFollowing(false, userId));
    });
  };
};
export const follow = (userId) => {
  return (dispatch) => {
    dispatch(isFollowing(true, userId));
    usersAPI.follower(userId).then((data) => {
      if (data.resultCode === 0) {
        dispatch(followSuccess(userId));
      }

      dispatch(isFollowing(false, userId));
    });
  };
};
export default UsersPageReducer;
