import { reset, stopSubmit } from 'redux-form';
import { authAPI, securityAPI } from '../API/API';

const IS_AUTH = 'auth/IS_AUTH';
const SET_USER_DATA = 'auth/SET_USER_DATA';
const GET_CAPTCHA = 'auth/GET_CAPTCHA';
const initialState = {
  userId: null as number | null,
  login: null as string | null,
  email: null as string | null,
  isAuth: false,
  captchaURL: null as string | null,
};
export type initialStateType = typeof initialState;
const AuthReducer = (state = initialState, action: any): initialStateType => {
  switch (action.type) {
    case SET_USER_DATA:
    case GET_CAPTCHA:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
type payloadType = {
  userId: number | null;
  login: string | null;
  email: string | null;
  isAuth: boolean | null;
};
type UserDataType = {
  type: typeof SET_USER_DATA;
  payload: payloadType;
};
export const UserData = (
  userId: number | null,
  email: string | null,
  login: string | null,
  isAuth: boolean | null
): UserDataType => ({
  type: SET_USER_DATA,
  payload: { userId, login, email, isAuth },
});
type getCaptchaSuccessType = {
  type: typeof GET_CAPTCHA;
  payload: { captchaURL: string };
};
export const getCaptchaSuccess = (
  captchaURL: string
): getCaptchaSuccessType => ({
  type: GET_CAPTCHA,
  payload: { captchaURL },
});
type authType = {
  type: typeof IS_AUTH;
  auth: boolean;
};
export const auth = (auth: boolean): authType => ({
  type: IS_AUTH,
  auth,
});
export const authInfo = () => async (dispatch: any) => {
  const data = await authAPI.me();
  if (data.resultCode === 0) {
    const { id, login, email } = data.data;
    dispatch(UserData(id, email, login, true));
  }
};
export const login = (
  email: string,
  password: string,
  rememberMe: boolean,
  captcha: string
) => async (dispatch: any) => {
  const data = await authAPI.login(email, password, rememberMe, captcha);
  if (data.resultCode === 0) {
    dispatch(authInfo());
  } else {
    if (data.resultCode === 10) dispatch(getCaptchaUrl());
    const message = data.messages.length > 0 ? data.messages[0] : 'Some error';
    dispatch(stopSubmit('login', { _error: message }));
  }
};

export const logout = () => async (dispatch: any) => {
  const data = await authAPI.logout();
  if (data.resultCode === 0) {
    dispatch(UserData(null, null, null, false));
  }
};
const getCaptchaUrl = () => async (dispatch: any) => {
  const data = await securityAPI.getCaptcha();
  dispatch(getCaptchaSuccess(data.url));
};

export default AuthReducer;
