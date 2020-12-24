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
export const follow = (userId) => ({ type: FOLLOWER, userId });
export const onFollow = (userId) => ({
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
export default UsersPageReducer;
