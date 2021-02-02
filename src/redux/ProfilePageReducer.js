import { reset, stopSubmit } from 'redux-form';
import { profileAPI } from '../API/API';

const GET_POST = 'GET-POST';
const SET_USERS_PROFILE = 'SET_USERS_PROFILE';
const SET_STATUS = 'SET_STATUS';
const SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS';
const PROFILE_UPDATE_SUCCESS = 'PROFILE_UPDATE_SUCCESS';
const PROFILE_UPDATE_ERROR = 'PROFILE_UPDATE_ERROR';
const initialState = {
  MessagePo: [
    { id: 1, message: "It's my life!!!", like: 48 },
    { id: 2, message: 'How are you do?', like: 14 },
  ],
  profile: null,
  IsContacts: false,
  status: '',
  profileUpdate: null,
};
const ProfilePageReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POST:
      const m = { id: 3, message: action.text, like: 0 };
      return { ...state, MessagePo: [...state.MessagePo, m] };
    case SET_USERS_PROFILE:
      return { ...state, profile: action.profile };
    case SET_STATUS:
      return { ...state, status: action.status };
    case SAVE_PHOTO_SUCCESS:
      return { ...state, profile: { ...state.profile, photos: action.photos } };
    case PROFILE_UPDATE_SUCCESS:
      return { ...state, profileUpdate: true };
    case PROFILE_UPDATE_ERROR:
      return { ...state, profileUpdate: false };
    default:
      return state;
  }
};
// ACTION_CREATE================================================
export const setPost = (text) => ({ type: GET_POST, text });

const setUsersProfile = (profile) => ({
  type: SET_USERS_PROFILE,
  profile,
});
const setStatus = (status) => ({
  type: SET_STATUS,
  status,
});
const savePhotoSuccess = (photos) => ({
  type: SAVE_PHOTO_SUCCESS,
  photos,
});
const profileUpdateSuccess = () => ({
  type: PROFILE_UPDATE_SUCCESS,
});
const profileUpdateError = () => ({
  type: PROFILE_UPDATE_ERROR,
});
// Thunk================================================================
export const getProfile = (usersId) => async (dispatch) => {
  const data = await profileAPI.UsersProfile(usersId);
  dispatch(setUsersProfile(data));
};
export const getStatus = (usersId) => async (dispatch) => {
  const data = await profileAPI.getStatus(usersId);
  dispatch(setStatus(data));
};
export const updateStatus = (status) => async (dispatch) => {
  const data = await profileAPI.updateStatus(status);
  if (data.resultCode === 0) {
    dispatch(setStatus(status));
  }
};
export const setPostClear = (text, clearForm) => (dispatch) => {
  dispatch(setPost(text));
  dispatch(reset(clearForm));
};
export const savePhoto = (file) => async (dispatch) => {
  const data = await profileAPI.savePhoto(file);
  if (data.resultCode === 0) {
    dispatch(savePhotoSuccess(data.data.photos));
  }
};
export const updateProfile = (profile) => async (dispatch) => {
  const data = await profileAPI.update(profile);
  if (data.resultCode === 0) {
    dispatch(profileUpdateSuccess());
    dispatch(getProfile(data.data));
  } else {
    dispatch(profileUpdateError());
    const messages =  JSON.parse(data.messages[0]).splite('>')
    dispatch(stopSubmit('EditProfile', { 'contacts':{ 'facebook' : data.messages[0] }}));
    debugger
  }
};

export default ProfilePageReducer;
