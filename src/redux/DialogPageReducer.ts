const GET_MESSAGE = 'GET-MESSAGE';

type ItemDialogsInfType = {
  id: number;
  name: string;
  ava: string;
};
type MessageI = {
  id: number;
  message: string;
};
const initialState = {
  ItemDialogsInf: [
    {
      id: 1,
      name: 'Ivan',
      ava: 'https://cs16planet.ru/steam-avatars/images/avatar3219.jpg',
    },
    {
      id: 2,
      name: 'Max',
      ava: 'https://avatarko.ru/img/kartinka/2/Gubka_Bob.jpg',
    },
    {
      id: 3,
      name: 'Anton',
      ava: 'https://klike.net/uploads/posts/2019-03/1551511801_1.jpg',
    },
    {
      id: 4,
      name: 'Grisha',
      ava:
        'https://i.pinimg.com/236x/7c/ab/18/7cab184c5e791921ed607e23458492b6.jpg',
    },
    {
      id: 5,
      name: 'Misha',
      ava:
        'https://i.pinimg.com/236x/74/05/5f/74055f83bfbdc20fdc1f9d1fc116fd26.jpg',
    },
  ] as Array<ItemDialogsInfType>,
  MessageI: [
    { id: 1, message: 'Hi!' },
    { id: 2, message: 'Hi!' },
    { id: 2, message: 'How are do?' },
    { id: 1, message: 'Yo' },
    { id: 1, message: 'My' },
    { id: 1, message: 'Niggas' },
    { id: 1, message: 'Vse good' },
    { id: 2, message: 'ok!!!' },
    { id: 2, message: 'ok!!!' },
    { id: 1, message: 'ok!!!' },
    { id: 1, message: 'ok!!!' },
    { id: 2, message: 'ok!!!' },
    { id: 1, message: 'ok!!!' },
    { id: 2, message: 'ok!!!' },
    { id: 1, message: 'ok!!!' },
  ] as Array<MessageI>,
};
export type initialStateType = typeof initialState;
const DialogPageReducer = (
  state = initialState,
  action: ActionType
): initialStateType => {
  switch (action.type) {
    case GET_MESSAGE: {
      const m = { id: 1, message: action.text };
      return { ...state, MessageI: [...state.MessageI, m] };
    }
    default:
      return state;
  }
};
type ActionType = subType;
type subType = {
  type: typeof GET_MESSAGE;
  text: string;
};

export const sub = (text: string): subType => ({ type: GET_MESSAGE, text });
export default DialogPageReducer;
