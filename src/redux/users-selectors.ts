import { AppStateType } from './state-Redux';
import { createSelector } from 'reselect';
import { usersType } from '../types/types';

export const getUsersSelectors = (state: AppStateType) => {
  return state.UsersPage.users;
};
export const getUsers = createSelector(getUsersSelectors, (users) => {
  return users.filter((u: usersType) => true);
});
export const getPageSize = (state: AppStateType) => {
  return state.UsersPage.pageSize;
};
export const getTotalItemsCount = (state: AppStateType) => {
  return state.UsersPage.totalItemsCount;
};
export const getCurrentPage = (state: AppStateType) => {
  return state.UsersPage.currentPage;
};
export const getIsFetching = (state: AppStateType) => {
  return state.UsersPage.isFetching;
};
export const getFollowingInProgress = (state: AppStateType) => {
  return state.UsersPage.followingInProgress;
};
export const getPortionSize = (state: AppStateType) => {
  return state.UsersPage.portionSize;
};
