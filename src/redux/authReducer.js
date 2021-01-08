import { authAPI, usersAPI } from '../API/API';

const IS_AUTH = 'IS_AUTH';
const SET_USER_DATA = 'SET_USER_DATA';
const initialState = {
  userId: null,
  login: null,
  email: null,
  isAuth: false,
};

const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
export const UserData = (userId, email, login, isAuth) => ({
  type: SET_USER_DATA,
  payload: { userId, login, email, isAuth },
});
export const auth = (auth) => ({
  type: IS_AUTH,
  auth,
});
export const authInfo = () => (dispatch) => {
  authAPI.me().then((data) => {
    if (data.resultCode === 0) {
      const { id, login, email } = data.data;
      dispatch(UserData(id, email, login, true));
    }
  });
};
export const login = (email, password, rememberMe) => (dispatch) => {
  authAPI.login(email, password, rememberMe).then((data) => {
    if (data.resultCode === 0) {
      dispatch(authInfo());
    }
  });
};
export const logout = () => (dispatch) => {
  authAPI.logout().then((data) => {
    if (data.resultCode === 0) {
      dispatch(UserData(null, null, null, false));
    }
  });
};
export default AuthReducer;
