const Follower = 'Follower';
const OnFollower = 'OnFollower';
const SET_USERS = 'SET-USERS';
const initialState = {
  users: [],
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
      return { ...state, users: [...action.users] };
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
export default UsersPageReducer;
