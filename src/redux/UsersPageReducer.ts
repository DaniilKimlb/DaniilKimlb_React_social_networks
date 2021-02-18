import { AppStateType } from './state-Redux';
import { usersType } from './../types/types';
import { usersAPI } from '../API/API';
import objectHelpers from '../utility/object_helpers';
import { ThunkAction } from 'redux-thunk';
import { Dispatch } from 'redux';

const FOLLOWER = 'users/FOLLOWER';
const ONFOLLOWER = 'users/ONFOLLOWER';
const SET_USERS = 'users/SET-USERS';
const SET_CURRENT_PAGE = 'users/SET_CURRENT_PAGE';
const SET_USERS_TOTAL_COUNT = 'users/SET_USERS_TOTAL_COUNT';
const IS_FETCHING = 'users/IS_FETCHING';
const IS_FOLLOWING = 'users/IS_FOLLOWING';
const initialState = {
  users: [] as Array<usersType>,
  pageSize: 24,
  totalItemsCount: 0,
  currentPage: 1,
  isFetching: false,
  followingInProgress: [] as Array<number>,
  portionSize: 5,
};
export type initialStateType = typeof initialState;
const UsersPageReducer = (
  state = initialState,
  action: ActionType
): initialStateType => {
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
type ActionType =
  | followSuccessType
  | UnfollowSuccessType
  | setUsersType
  | setCurrentPageType
  | setItemsTotalCountType
  | isPreloaderType
  | isFollowingType;
type followSuccessType = { type: typeof FOLLOWER; userId: number };
export const followSuccess = (userId: number): followSuccessType => ({
  type: FOLLOWER,
  userId,
});
type UnfollowSuccessType = { type: typeof ONFOLLOWER; userId: number };
export const UnfollowSuccess = (userId: number): UnfollowSuccessType => ({
  type: ONFOLLOWER,
  userId,
});
type setUsersType = { type: typeof SET_USERS; users: Array<usersType> };
export const setUsers = (users: Array<usersType>): setUsersType => ({
  type: SET_USERS,
  users,
});
type setCurrentPageType = {
  type: typeof SET_CURRENT_PAGE;
  currentPage: number;
};
export const setCurrentPage = (currentPage: number): setCurrentPageType => ({
  type: SET_CURRENT_PAGE,
  currentPage,
});
type setItemsTotalCountType = {
  type: typeof SET_USERS_TOTAL_COUNT;
  totalItemsCount: number;
};
export const setItemsTotalCount = (
  totalItemsCount: number
): setItemsTotalCountType => ({
  type: SET_USERS_TOTAL_COUNT,
  totalItemsCount,
});
type isPreloaderType = { type: typeof IS_FETCHING; isFetching: boolean };

export const isPreloader = (isFetching: boolean): isPreloaderType => ({
  type: IS_FETCHING,
  isFetching,
});
type isFollowingType = {
  type: typeof IS_FOLLOWING;
  isFol: boolean;
  userId: number;
};
export const isFollowing = (
  isFol: boolean,
  userId: number
): isFollowingType => ({
  type: IS_FOLLOWING,
  isFol,
  userId,
});
type DispatchType = Dispatch<ActionType>;
type ThunkType = ThunkAction<Promise<any>, AppStateType, unknown, ActionType>;
export const requestUsers = (
  pageSize: number,
  currentPage: number
): ThunkType => {
  return async (dispatch: any) => {
    dispatch(isPreloader(true));
    const data = await usersAPI.getUsers(pageSize, currentPage);
    dispatch(isPreloader(false));
    dispatch(setUsers(data.items));
    dispatch(setItemsTotalCount(data.totalCount));
  };
};
const followUnfollowFlow = async (
  dispatch: DispatchType,
  toggleFollowingProgress: (isFol: boolean, userId: number) => isFollowingType,
  userId: number,
  methodAPI: any,
  actionCreator: (userId: number) => UnfollowSuccessType | followSuccessType
) => {
  dispatch(toggleFollowingProgress(true, userId));
  const data = await methodAPI(userId);
  if (data.resultCode === 0) {
    dispatch(actionCreator(userId));
  }
  dispatch(toggleFollowingProgress(false, userId));
};
export const unfollow = (userId: number): ThunkType => async (dispatch: any) =>
  followUnfollowFlow(
    dispatch,
    isFollowing,
    userId,
    usersAPI.Unfollower,
    UnfollowSuccess
  );

export const follow = (userId: number): ThunkType => async (dispatch: any) =>
  followUnfollowFlow(
    dispatch,
    isFollowing,
    userId,
    usersAPI.follower,
    followSuccess
  );
export default UsersPageReducer;
