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
import { withRouter } from 'react-router-dom/cjs/react-router-dom.min';
import { connect } from 'react-redux';
import { initializeApp } from './redux/AppReducer';
import Preloader from './components/Preloader/Preloader';
import withSuspense from './hoc/withSuspense';
import { useEffect } from 'react';
import ProfileContainer from './components/Profile/ProfileContainer'
const DialogsContainer = React.lazy(() =>
  import('./components/Dialogs/DialogContainer')
);
const App = (props) => {
  useEffect(() => {
    props.initializeApp();
  }, []);
  if (!props.initialized) {
    return <Preloader />;
  }
  return (
    <BrowserRouter>
      <Route path="/Login" render={() => <Login />} />
      <div className="wrapper">
        <HeaderContainer />
        <Nav />
        <div class="content">
          <Route
            path="/Profile/:usersId?"
            render={()=><ProfileContainer/>}
          />
          <Route path="/Messages" render={withSuspense(DialogsContainer)} />
          <Route path="/News" render={() => <News />} />
          <Route path="/Music" render={() => <Music />} />
          <Route path="/Setting" render={() => <Setting />} />
          <Route path="/Users" render={() => <UsersContainer />} />
        </div>
      </div>
    </BrowserRouter>
  );
};

const mapStateToProps = (state) => ({
  initialized: state.App.initialized,
});
export default compose(connect(mapStateToProps, { initializeApp }))(App);
