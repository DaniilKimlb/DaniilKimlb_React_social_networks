import React from 'react';
import './App.css';
import Nav from './components/Nav/NavContainer';
import { BrowserRouter, Route } from '../node_modules/react-router-dom';
import Setting from './components/Settings/Setting';
import Music from './components/Music/Music';
import News from './components/News/News';
import UsersContainer from './components/Users/UsersContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import { compose } from 'redux/es/redux';
import { connect } from 'react-redux';
import { initializeApp, globalError } from './redux/AppReducer';
import Preloader from './components/Preloader/Preloader';
import withSuspense from './hoc/withSuspense';
import { useEffect } from 'react';
import ProfileContainer from './components/Profile/ProfileContainer';
import { Redirect, Switch } from 'react-router-dom';
const DialogsContainer = React.lazy(() =>
  import('./components/Dialogs/DialogContainer')
);
const App = (props) => {
  const globalError = (reason, promise) => {
    props.globalError(true);
  };
  useEffect(() => {
    props.initializeApp();
    window.addEventListener('unhandledrejection', (e) => globalError(e.reason));
    return () => {
      window.removeEventListener('unhandledrejection', (e) =>
        globalError(e.reason)
      );
    };
  }, []);

  if (!props.initialized) {
    return <Preloader />;
  }
  return (
    <BrowserRouter>
      {props.isGlobalError && (
        <div className={'Error'}>
          <span className="message">
            there was a problem on the server... try again later!
          </span>
          <span className={'close'} onClick={() => props.globalError(false)}>
            X
          </span>
        </div>
      )}
      <Switch>
        <div className="wrapper">
          <HeaderContainer />
          <Nav />
          <div class="content">
            <Route
              path="/Profile/:usersId?"
              render={() => <ProfileContainer />}
            />
            <Route path="/Messages" render={withSuspense(DialogsContainer)} />
            <Route path="/News" render={() => <News />} />
            <Route path="/Music" render={() => <Music />} />
            <Route path="/Setting" render={() => <Setting />} />
            <Route path="/Users" render={() => <UsersContainer />} />
            <Route path="/Login" render={() => <Login />} />
          </div>
        </div>
        <Redirect from="/" to="/Profile" />
        <Route path="*" render={() => <h1>404 not fouls</h1>} />
      </Switch>
    </BrowserRouter>
  );
};

const mapStateToProps = (state) => ({
  initialized: state.App.initialized,
  isGlobalError: state.App.isGlobalError,
});
export default compose(
  connect(mapStateToProps, { initializeApp, globalError })
)(App);
