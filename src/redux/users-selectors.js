import { createSelector } from 'reselect';

export const getUsersSelectors = (state) => {
  return state.UsersPage.users;
};
export const getUsers = createSelector(getUsersSelectors, (users) => {
  return users.filter((u) => true);
});
export const getPageSize = (state) => {
  return state.UsersPage.pageSize;
};
export const getTotalUserCount = (state) => {
  return state.UsersPage.totalUserCount;
};
export const getCurrentPage = (state) => {
  return state.UsersPage.currentPage;
};
export const getIsFetching = (state) => {
  return state.UsersPage.isFetching;
};
export const getFollowingInProgress = (state) => {
  return state.UsersPage.followingInProgress;
};
