// import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav/NavContainer';
import { BrowserRouter, Route } from '../node_modules/react-router-dom';
import Setting from './components/Settings/Setting';
import Music from './components/Music/Music';
import News from './components/News/News';
import DialogsContainer from './components/Dialogs/DialogContainer';
import FindUsersContainer from './components/Users/UsersContainer';
import Content from './components/Profile/Profile';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
const App = () => {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <HeaderContainer />
        <Nav />
        <div class="content">
          <Route path="/Profile/:usersId?" render={() => <Content />} />
          <Route path="/Messages" render={() => <DialogsContainer />} />
          <Route path="/News" render={() => <News />} />
          <Route path="/Music" render={() => <Music />} />
          <Route path="/Setting" render={() => <Setting />} />
          <Route path="/Users" render={() => <FindUsersContainer />} />
          <Route path="/Login" render={() => <Login />} />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
