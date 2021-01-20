import ProfilePageReducer, { getPost } from './ProfilePageReducer';

it('gfg', () => {
  const state = {
    MessagePo: [
      { id: 1, message: "It's my life!!!", like: 48 },
      { id: 2, message: 'How are you do?', like: 14 },
    ],
  };
  const action = getPost('mimi');
  const newState = ProfilePageReducer(state, action);
  expect(newState.MessagePo.length).toBe(3);
});
