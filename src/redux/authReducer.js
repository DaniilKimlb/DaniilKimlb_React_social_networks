import { stopSubmit } from 'redux-form';
import { authAPI } from '../API/API';

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
export const authInfo = () => async (dispatch) => {
  const data = await authAPI.me();
  if (data.resultCode === 0) {
    const { id, login, email } = data.data;
    dispatch(UserData(id, email, login, true));
  }
};
export const login = (email, password, rememberMe) => async (dispatch) => {
  const data = await authAPI.login(email, password, rememberMe);
  if (data.resultCode === 0) {
    dispatch(authInfo());
  } else {
    const message = data.messages.length > 0 ? data.messages[0] : 'Some error';
    dispatch(stopSubmit('login', { _error: message }));
  }
};

export const logout = () => async (dispatch) => {
  const data = authAPI.logout();
  if (data.resultCode === 0) {
    dispatch(UserData(null, null, null, false));
  }
};

export default AuthReducer;
