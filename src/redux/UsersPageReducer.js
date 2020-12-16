const Follower = 'Follower';
const OnFollower = 'OnFollower';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_USERS_TOTAL_COUNT = 'SET_USERS_TOTAL_COUNT';
const initialState = {
  users: [],
  pageSize: 4,
  totalUserCount: 0,
  currentPage: 3,
};
const UsersPageReducer = (state = initialState, action) => {
  switch (action.type) {
    case Follower:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, follower: true };
          }
          return u;
        }),
      };
    case OnFollower:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, follower: false };
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

    default:
      return state;
  }
};
export const FollowerAC = (userId) => ({ type: Follower, userId });
export const OnFollowerAC = (userId) => ({
  type: OnFollower,
  userId,
});
export const setUsersAC = (users) => ({ type: SET_USERS, users });
export const setCurrentPageAC = (currentPage) => ({
  type: SET_CURRENT_PAGE,
  currentPage,
});
export const setUsersTotalCountAC = (totalUserCount) => ({
  type: SET_USERS_TOTAL_COUNT,
  totalUserCount,
});
export default UsersPageReducer;
