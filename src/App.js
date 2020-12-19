// import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import { BrowserRouter, Route } from '../node_modules/react-router-dom';
import Setting from './components/Settings/Setting';
import Music from './components/Music/Music';
import News from './components/News/News';
import DialogsContainer from './components/Dialogs/DialogContainer';
import FindUsersContainer from './components/Users/UsersContainer';
import Content from './components/Profile/Profile';
const App = () => {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <Header />
        <Nav />
        <div class="content">
          <Route path="/Profile/:usersId?" render={() => <Content />} />
          <Route path="/Messages" render={() => <DialogsContainer />} />
          <Route path="/News" render={() => <News />} />
          <Route path="/Music" render={() => <Music />} />
          <Route path="/Setting" render={() => <Setting />} />
          <Route path="/FindUser" render={() => <FindUsersContainer />} />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
