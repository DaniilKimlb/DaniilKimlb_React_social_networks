import { reset } from 'redux-form';
import { profileAPI, usersAPI } from '../API/API';

const GET_POST = 'GET-POST';
const GET_TEXT = 'GET-TEXT';
const SET_USERS_PROFILE = 'SET_USERS_PROFILE';
const SET_STATUS = 'SET_STATUS';
const SET_IS_PROFILE = 'SET_IS_PROFILE';
const SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS';
const initialState = {
  MessagePo: [
    { id: 1, message: "It's my life!!!", like: 48 },
    { id: 2, message: 'How are you do?', like: 14 },
  ],
  profile: null,
  IsContacts: false,
  status: '',
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
//
export default ProfilePageReducer;
