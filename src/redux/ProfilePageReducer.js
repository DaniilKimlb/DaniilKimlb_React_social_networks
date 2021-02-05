import { reset, stopSubmit } from 'redux-form';
import { profileAPI } from '../API/API';

const GET_POST = 'GET-POST';
const SET_USERS_PROFILE = 'SET_USERS_PROFILE';
const SET_STATUS = 'SET_STATUS';
const SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS';
const DELETE_POST = 'DELETE_POST';
const PROFILE_UPDATE = 'profile/PROFILE_UPDATE';
const initialState = {
  MessagePo: [
    { id: 1, message: "It's my life!!!", like: 48 },
    { id: 2, message: 'How are you do?', like: 14 },
  ],
  profile: null,
  IsContacts: false,
  status: '',
  profileUpdateComplete: null,
};
const ProfilePageReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POST:
      const m = {
        id: [...state.MessagePo].length + 1,
        message: action.text,
        like: 0,
      };
      return { ...state, MessagePo: [...state.MessagePo, m] };
    case SET_USERS_PROFILE:
      return { ...state, profile: action.profile };
    case SET_STATUS:
      return { ...state, status: action.status };
    case SAVE_PHOTO_SUCCESS:
      return { ...state, profile: { ...state.profile, photos: action.photos } };
    case PROFILE_UPDATE:
      return { ...state, profileUpdateComplete: action.updateProfile };
    case DELETE_POST:
      return {
        ...state,
        MessagePo: [...state.MessagePo].filter((p) => action.postId !== p.id),
      };
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
export const deletePost = (postId) => ({
  type: DELETE_POST,
  postId,
});
export const profileUpdate = (updateProfile) => ({
  type: PROFILE_UPDATE,
  updateProfile,
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
export const updateProfile = (profile) => async (dispatch, getState) => {
  const data = await profileAPI.update(profile);
  dispatch(profileUpdate(false));
  if (data.resultCode === 0) {
    dispatch(getProfile(getState().Auth.userId));
    dispatch(profileUpdate(true));
  } else {
    dispatch(profileUpdate(false));
    const errObject = {};
    for (let i of data.messages) {
      const d = i.split('>');
      const err = i.split('(');
      const element = d[1].slice(0, -1).toLowerCase();
      errObject[element === 'mainlink' ? element.replace('l', 'L') : element] =
        err[0];
    }
    dispatch(
      stopSubmit('EditProfile', {
        contacts: { ...errObject },
      })
    );
  }
};

export default ProfilePageReducer;
