import { usersAPI } from '../API/API';
import objectHelpers from '../utility/object_helpers';

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
  totalItemsCount: 0,
  currentPage: 1,
  isFetching: false,
  followingInProgress: [],
  portionSize: 5,
};
const UsersPageReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOWER:
      return {
        ...state,
        users: objectHelpers(state.users, 'id', action.userId, {
          followed: true,
        }),
      };
    case ONFOLLOWER:
      return {
        ...state,
        users: objectHelpers(state.users, 'id', action.userId, {
          followed: false,
        }),
      };
    case SET_USERS:
      return { ...state, users: action.users };
    case SET_CURRENT_PAGE:
      return { ...state, currentPage: action.currentPage };
    case SET_USERS_TOTAL_COUNT:
      return { ...state, totalItemsCount: action.totalItemsCount };
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
export const setItemsTotalCount = (totalItemsCount) => ({
  type: SET_USERS_TOTAL_COUNT,
  totalItemsCount,
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
  return async (dispatch) => {
    dispatch(isPreloader(true));
    const data = await usersAPI.getUsers(pageSize, currentPage);
    dispatch(isPreloader(false));
    dispatch(setUsers(data.items));
    dispatch(setItemsTotalCount(data.totalCount));
  };
};
const followUnfollowFlow = async (
  dispatch,
  toggleFollowingProgress,
  userId,
  methodAPI,
  actionCreator
) => {
  dispatch(toggleFollowingProgress(true, userId));
  const data = await methodAPI(userId);
  if (data.resultCode === 0) {
    dispatch(actionCreator(userId));
  }
  dispatch(toggleFollowingProgress(false, userId));
};
export const unfollow = (userId) => async (dispatch) =>
  followUnfollowFlow(
    dispatch,
    isFollowing,
    userId,
    usersAPI.Unfollower,
    UnfollowSuccess
  );

export const follow = (userId) => async (dispatch) =>
  followUnfollowFlow(
    dispatch,
    isFollowing,
    userId,
    usersAPI.follower,
    followSuccess
  );
export default UsersPageReducer;
