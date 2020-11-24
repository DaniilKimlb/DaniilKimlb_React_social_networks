import { createStore } from 'redux';
import { combineReducers } from 'redux/es/redux';
import DialogPageReducer from './DialogPageReducer';
import NavPageReducer from './NavPageReducer';
import ProfilePageReducer from './ProfilePageReducer';

const reducer = combineReducers({
  DialogPage: DialogPageReducer,
  ProfilePage: ProfilePageReducer,
  NavPage: NavPageReducer,
});

const store = createStore(reducer);
export default store;
