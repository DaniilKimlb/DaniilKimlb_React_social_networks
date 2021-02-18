import { MessagePoType, profileType } from '../types/types';
import { reset, stopSubmit } from 'redux-form';
import { profileAPI } from '../API/API';
import { ThunkAction } from 'redux-thunk';
import { AppStateType } from './state-Redux';

const SET_POST = 'profile/SET-POST';
const SET_USERS_PROFILE = 'profile/SET_USERS_PROFILE';
const SET_STATUS = 'profile/SET_STATUS';
const SAVE_PHOTO_SUCCESS = 'profile/SAVE_PHOTO_SUCCESS';
const DELETE_POST = 'profile/DELETE_POST';
const PROFILE_UPDATE = 'profile/PROFILE_UPDATE';
const initialState = {
  MessagePo: [
    { id: 1, message: "It's my life!!!", like: 48 },
    { id: 2, message: 'How are you do?', like: 14 },
  ] as Array<MessagePoType>,
  profile: null as profileType | null,
  IsContacts: false,
  status: '',
  profileUpdateComplete: false,
};
export type initialStateType = typeof initialState;
const ProfilePageReducer = (
  state = initialState,
  action: ActionsTypes
): initialStateType => {
  switch (action.type) {
    case SET_POST:
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
      return {
        ...state,
        profile: { ...state.profile, photos: action.photos } as any,
      };
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
type ActionsTypes =
  | setPostType
  | setPostType
  | savePhotoSuccessType
  | setStatusProfileType
  | setUsersProfileType
  | deletePostType
  | profileUpdateType;
type ThunkType = ThunkAction<Promise<any>, AppStateType, unknown, ActionsTypes>;
type setPostType = { type: typeof SET_POST; text: string };
export const setPost = (text: string): setPostType => ({
  type: SET_POST,
  text,
});

type setUsersProfileType = {
  type: typeof SET_USERS_PROFILE;
  profile: profileType;
};
const setUsersProfile = (profile: profileType): setUsersProfileType => ({
  type: SET_USERS_PROFILE,
  profile,
});
type setStatusProfileType = { type: typeof SET_STATUS; status: string };
const setStatus = (status: string): setStatusProfileType => ({
  type: SET_STATUS,
  status,
});
type savePhotoSuccessType = { type: typeof SAVE_PHOTO_SUCCESS; photos: string };

const savePhotoSuccess = (photos: any): savePhotoSuccessType => ({
  type: SAVE_PHOTO_SUCCESS,
  photos,
});
type deletePostType = { type: typeof DELETE_POST; postId: number };
export const deletePost = (postId: number): deletePostType => ({
  type: DELETE_POST,
  postId,
});
type profileUpdateType = {
  type: typeof PROFILE_UPDATE;
  updateProfile: boolean;
};
export const profileUpdate = (updateProfile: boolean): profileUpdateType => ({
  type: PROFILE_UPDATE,
  updateProfile,
});

// Thunk================================================================
export const getProfile = (usersId: number): ThunkType => async (
  dispatch: any
) => {
  const data = await profileAPI.UsersProfile(usersId);
  dispatch(setUsersProfile(data));
};
export const getStatus = (usersId: number): ThunkType => async (
  dispatch: any
) => {
  const data = await profileAPI.getStatus(usersId);
  dispatch(setStatus(data));
};
export const updateStatus = (status: string): ThunkType => async (
  dispatch: any
) => {
  const data = await profileAPI.updateStatus(status);
  if (data.resultCode === 0) {
    dispatch(setStatus(status));
  }
};
export const setPostClear = (
  text: string,
  clearForm: string
): ThunkType => async (dispatch: any) => {
  dispatch(setPost(text));
  dispatch(reset(clearForm));
};
export const savePhoto = (file: any): ThunkType => async (dispatch: any) => {
  const data = await profileAPI.savePhoto(file);
  if (data.resultCode === 0) {
    dispatch(savePhotoSuccess(data.data.photos));
  }
};
export const updateProfile = (profile: profileType): ThunkType => async (
  dispatch: any,
  getState: any
) => {
  const data = await profileAPI.update(profile);
  dispatch(profileUpdate(false));
  if (data.resultCode === 0) {
    dispatch(getProfile(getState().Auth.userId));
    dispatch(profileUpdate(true));
  } else {
    dispatch(profileUpdate(false));
    const errObject: any = {};
    for (let i of data.messages) {
      const d: Array<string> = i.split('>');
      const err: Array<string> = i.split('(');
      const element: string = d[1].slice(0, -1).toLowerCase();
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
