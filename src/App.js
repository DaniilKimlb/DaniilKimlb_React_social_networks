// import logo from './logo.svg';
import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Profile from './components/Profile/Profile';
import { BrowserRouter, Route } from '../node_modules/react-router-dom';
import Setting from './components/Settings/Setting';
import Music from './components/Music/Music';
import News from './components/News/News';
import DialogsContainer from './components/Dialogs/DialogContainer';
const App = (props) => {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <Header />
        <Nav />
        <div class="content">
          <Route path="/Profile" render={() => <Profile />} />
          <Route path="/Messages" render={() => <DialogsContainer />} />
          <Route path="/News" render={() => <News />} />
          <Route path="/Music" render={() => <Music />} />
          <Route path="/Setting" render={() => <Setting />} />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
