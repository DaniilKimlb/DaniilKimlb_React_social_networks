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
export const getTotalItemsCount = (state) => {
  return state.UsersPage.totalItemsCount;
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
export const getPortionSize = (state) => {
  return state.UsersPage.portionSize;
};
