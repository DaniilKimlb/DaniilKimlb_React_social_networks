const GET_POST = 'GET-POST';
const GET_TEXT = 'GET-TEXT';
const initialState = {
  MessagePo: [
    { id: 1, message: "It's my life!!!", like: 48 },
    { id: 2, message: 'How are you do?', like: 14 },
  ],
  pValue: '',
};
const ProfilePageReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POST: {
      const m = { id: 3, message: state.pValue, like: 0 };
      let StateCopy = { ...state };
      StateCopy.MessagePo = [...state.MessagePo];
      StateCopy.MessagePo.push(m);
      StateCopy.pValue = '';
      return StateCopy;
    }
    case GET_TEXT: {
      let StateCopy = { ...state };
      StateCopy.pValue = action.text;
      return StateCopy;
    }
    default:
      return state;
  }
};
export const GET_POST_ACTION_CREATE = () => ({ type: GET_POST });
export const GET_TEXT_ACTION_CREATE = (text) => ({
  type: GET_TEXT,
  text: text,
});
export default ProfilePageReducer;
