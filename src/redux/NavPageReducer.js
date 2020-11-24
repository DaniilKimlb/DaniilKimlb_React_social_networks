const initialState = {
  InfoFriends: [
    { id: 1, name: 'Ivan', status: true },
    { id: 1, name: 'Grisha', status: false },
    { id: 1, name: 'Ahmet', status: true },
    { id: 1, name: 'Gleb', status: false },
  ],
};
const NavPageReducer = (state = initialState, action) => {
  return state;
};
export default NavPageReducer;
