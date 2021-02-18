import { createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { applyMiddleware, combineReducers, compose } from 'redux';
import AuthReducer from './authReducer';
import DialogPageReducer from './DialogPageReducer';
import NavPageReducer from './NavPageReducer';
import ProfilePageReducer from './ProfilePageReducer';
import UsersPageReducer from './UsersPageReducer';
import { reducer as formReducer } from 'redux-form';
import AppReducer from './AppReducer';
const rootReducer = combineReducers({
  DialogPage: DialogPageReducer,
  ProfilePage: ProfilePageReducer,
  NavPage: NavPageReducer,
  UsersPage: UsersPageReducer,
  Auth: AuthReducer,
  form: formReducer,
  App: AppReducer,
});
type rootReducerType = typeof rootReducer
export type AppStateType = ReturnType<rootReducerType>
// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunkMiddleware))
);
// @ts-ignore
window.store = store;
export default store;
