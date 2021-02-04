import { reset, stopSubmit } from 'redux-form';
import { authAPI, securityAPI } from '../API/API';

const IS_AUTH = 'auth/IS_AUTH';
const SET_USER_DATA = 'auth/SET_USER_DATA';
const GET_CAPTCHA = 'auth/GET_CAPTCHA';
const initialState = {
  userId: null,
  login: null,
  email: null,
  isAuth: false,
  captchaURL: null,
};

const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
    case GET_CAPTCHA:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
export const UserData = (userId, email, login, isAuth) => ({
  type: SET_USER_DATA,
  payload: { userId, login, email, isAuth },
});
export const getCaptchaSuccess = (captchaURL) => ({
  type: GET_CAPTCHA,
  payload: { captchaURL },
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
export const login = (email, password, rememberMe, captcha) => async (
  dispatch
) => {
  const data = await authAPI.login(email, password, rememberMe, captcha);
  if (data.resultCode === 0) {
    dispatch(authInfo());
  } else {
    if (data.resultCode === 10) dispatch(getCaptchaUrl());
    const message = data.messages.length > 0 ? data.messages[0] : 'Some error';
    dispatch(stopSubmit('login', { _error: message }));
  }
};

export const logout = () => async (dispatch) => {
  const data = await authAPI.logout();
  if (data.resultCode === 0) {
    dispatch(UserData(null, null, null, false));
  }
};
const getCaptchaUrl = () => async (dispatch) => {
  const data = await securityAPI.getCaptcha();
  dispatch(getCaptchaSuccess(data.url));
};

export default AuthReducer;
