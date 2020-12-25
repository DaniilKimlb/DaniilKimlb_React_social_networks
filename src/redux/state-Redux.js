import { createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { applyMiddleware, combineReducers } from 'redux/es/redux';
import AuthReducer from './authReducer';
import DialogPageReducer from './DialogPageReducer';
import NavPageReducer from './NavPageReducer';
import ProfilePageReducer from './ProfilePageReducer';
import UsersPageReducer from './UsersPageReducer';

const reducer = combineReducers({
  DialogPage: DialogPageReducer,
  ProfilePage: ProfilePageReducer,
  NavPage: NavPageReducer,
  UsersPage: UsersPageReducer,
  Auth: AuthReducer,
});

const store = createStore(reducer, applyMiddleware(thunkMiddleware));
export default store;
