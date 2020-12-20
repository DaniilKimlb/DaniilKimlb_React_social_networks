const GET_POST = 'GET-POST';
const GET_TEXT = 'GET-TEXT';
const SET_USERS_PROFILE = 'SET_USERS_PROFILE';
const iS_CONTACTS = 'iS_CONTACTS';
const initialState = {
  MessagePo: [
    { id: 1, message: "It's my life!!!", like: 48 },
    { id: 2, message: 'How are you do?', like: 14 },
  ],
  pValue: '',
  profile: null,
  IsContacts: false,
};
const ProfilePageReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POST:
      const m = { id: 3, message: state.pValue, like: 0 };
      return { ...state, MessagePo: [...state.MessagePo, m], pValue: '' };
    case GET_TEXT:
      return { ...state, pValue: action.text };
    case SET_USERS_PROFILE:
      return { ...state, profile: action.profile };
    case iS_CONTACTS:
      return { ...state, IsContacts: action.Contacts };
    default:
      return state;
  }
};
export const GET_POST_ACTION_CREATE = () => ({ type: GET_POST });
export const GET_TEXT_ACTION_CREATE = (text) => ({
  type: GET_TEXT,
  text: text,
});
export const setUsersProfile = (profile) => ({
  type: SET_USERS_PROFILE,
  profile,
});
export const Contacts = (Contacts) => ({
  type: iS_CONTACTS,
  Contacts,
});
export default ProfilePageReducer;
