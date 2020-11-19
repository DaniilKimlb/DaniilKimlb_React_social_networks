import { reactPortThree } from '../render';

const state = {
  ProfilePage: {
    MessagePo: [
      { id: 1, message: "It's my life!!!", like: 48 },
      { id: 2, message: 'How are you do?', like: 14 },
    ],
    pValue: '',
  },
  DialogPage: {
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
    ],
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
    ],
    mValue: '',
  },
  NavPage: {
    InfoFriends: [
      { id: 1, name: 'Ivan', status: true },
      { id: 1, name: 'Grisha', status: false },
      { id: 1, name: 'Ahmet', status: true },
      { id: 1, name: 'Gleb', status: false },
    ],
  },
};

export let getPost = () => {
  const m = { id: 3, message: state.ProfilePage.pValue, like: 0 };
  state.ProfilePage.MessagePo.push(m);
  state.ProfilePage.pValue = '';
  reactPortThree(state);
};
export let getText = (text) => {
  state.ProfilePage.pValue = text;
  reactPortThree(state);
};
window.state = state;
export let getMessage = (Message) => {
  const m = { id: 1, message: Message };
  state.DialogPage.MessageI.push(m);
  state.DialogPage.mValue = '';
  reactPortThree(state);
};
export let getTextM = (text) => {
  state.DialogPage.mValue = text;
  reactPortThree(state);
};
export default state;
