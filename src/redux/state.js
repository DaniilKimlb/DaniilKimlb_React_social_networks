const store = {
  _state: {
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
  },
  _callSubscriber() {
    console.log('adsd');
  },
  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer; // observer -  Pattern
  },
  _getPost() {
    const m = { id: 3, message: this._state.ProfilePage.pValue, like: 0 };
    this._state.ProfilePage.MessagePo.push(m);
    this._state.ProfilePage.pValue = '';
    this._callSubscriber(this._state);
  },
  _getText(text) {
    this._state.ProfilePage.pValue = text;
    this._callSubscriber(this._state);
  },
  _getMessage() {
    const m = { id: 1, message: this._state.DialogPage.mValue };
    this._state.DialogPage.MessageI.push(m);
    this._state.DialogPage.mValue = '';
    this._callSubscriber(this._state);
  },
  _getTextM(text) {
    this._state.DialogPage.mValue = text;
    this._callSubscriber(this._state);
  },
  dispatch(action) {
    //================= способ 1 ===============
    // switch (action.type) {
    //   case 'GET-POST':
    //     this._getPost();
    //     break;
    //   case 'GET-TEXT':
    //     this._getText(action.text);
    //     break;
    //   case 'GET-MESSAGE':
    //     this._getMessage();
    //     break;
    //   case 'GET-TEXTM':
    //     this._getTextM(action.text);
    //     break;
    //   default:
    //     break;
    // ======================== Способ 2 ====================
    if (action.type === 'GET-POST') {
      const m = { id: 3, message: this._state.ProfilePage.pValue, like: 0 };
      this._state.ProfilePage.MessagePo.push(m);
      this._state.ProfilePage.pValue = '';
      this._callSubscriber(this._state);
    } else if (action.type === 'GET-TEXT') {
      this._state.ProfilePage.pValue = action.text;
      this._callSubscriber(this._state);
    } else if (action.type === 'GET-MESSAGE') {
      const m = { id: 1, message: this._state.DialogPage.mValue };
      this._state.DialogPage.MessageI.push(m);
      this._state.DialogPage.mValue = '';
      this._callSubscriber(this._state);
    } else if (action.type === 'GET-TEXTM') {
      this._state.DialogPage.mValue = action.text;
      this._callSubscriber(this._state);
    }
    // =============== Способ 3 =============================
    //   if (action.type === 'GET-POST') {
    //     this._getPost();
    //   } else if (action.type === 'GET-TEXT') {
    //     this._getText(action.text);
    //   } else if (action.type === 'GET-MESSAGE') {
    //     this._getMessage();
    //   } else if (action.type === 'GET-TEXTM') {
    //     this._getTextM(action.text);
    //   }
  },
};

export default store;
