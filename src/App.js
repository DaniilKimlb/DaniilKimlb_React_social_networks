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
const App = () => {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <Header />
        <Nav />
        <div class="content">
          <Route path="/Messages" component={Dialogs} />
          <Route path="/Profile" component={Profile} />
          <Route path="/News" component={News} />
          <Route path="/Music" component={Music} />
          <Route path="/Setting" component={Setting} />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
