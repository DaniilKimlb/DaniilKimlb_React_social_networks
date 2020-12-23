const IS_AUTH = 'IS_AUTH';
const SET_USER_DATA = 'SET_USER_DATA';
const IS_FETCHING = 'IS_FETCHING';
const initialState = {
  userId: null,
  login: null,
  email: null,
  isAuth: false,
};

const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return { ...state, ...action.data, isAuth: true };
    default:
      return state;
  }
};
export const UserData = (userId, login, email) => ({
  type: SET_USER_DATA,
  data: { userId, login, email },
});
export const auth = (auth) => ({
  type: IS_AUTH,
  auth,
});

export default AuthReducer;