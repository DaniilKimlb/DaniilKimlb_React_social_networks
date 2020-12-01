import { createStore } from 'redux';
import { combineReducers } from 'redux/es/redux';
import DialogPageReducer from './DialogPageReducer';
import NavPageReducer from './NavPageReducer';
import ProfilePageReducer from './ProfilePageReducer';
import UsersPageReducer from './UsersPageReducer';

const reducer = combineReducers({
  DialogPage: DialogPageReducer,
  ProfilePage: ProfilePageReducer,
  NavPage: NavPageReducer,
  UsersPage: UsersPageReducer,
});

const store = createStore(reducer);
export default store;
