import { profileAPI, usersAPI } from '../API/API';

const GET_POST = 'GET-POST';
const GET_TEXT = 'GET-TEXT';
const SET_USERS_PROFILE = 'SET_USERS_PROFILE';
const SET_STATUS = 'SET_STATUS';
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
      return { ...state, MessagePo: [...state.MessagePo, m], pValue: '' };
    case SET_USERS_PROFILE:
      return { ...state, profile: action.profile };
    case SET_STATUS:
      return { ...state, status: action.status };
    default:
      return state;
  }
};
// ACTION_CREATE================================================
export const getPost = (text) => ({ type: GET_POST, text });

const setUsersProfile = (profile) => ({
  type: SET_USERS_PROFILE,
  profile,
});
const setStatus = (status) => ({
  type: SET_STATUS,
  status,
});
// Thunk================================================================
export const getProfile = (usersId) => (dispatch) => {
  profileAPI
    .UsersProfile(usersId)
    .then((data) => dispatch(setUsersProfile(data)));
};
export const getStatus = (usersId) => (dispatch) => {
  profileAPI.getStatus(usersId).then((data) => dispatch(setStatus(data)));
};
export const updateStatus = (status) => (dispatch) => {
  profileAPI.updateStatus(status).then((data) => {
    if (data.resultCode === 0) {
      dispatch(setStatus(status));
    }
  });
};
//
export default ProfilePageReducer;
