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
const App = (props) => {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <Header />
        <Nav InfoFriends={props.state.NavPage.InfoFriends} />
        <div class="content">
          <Route
            path="/Profile"
            render={() => (
              <Profile
                MessagePo={props.state.ProfilePage.MessagePo}
                dispatch={props.dispatch}
                pValue={props.state.ProfilePage.pValue}
              />
            )}
          />
          <Route
            path="/Messages"
            render={() => (
              <Dialogs
                ItemDialogsInf={props.state.DialogPage.ItemDialogsInf}
                MessageI={props.state.DialogPage.MessageI}
                dispatch={props.dispatch}
                mValue={props.state.DialogPage.mValue}
              />
            )}
          />
          <Route path="/News" render={() => <News />} />
          <Route path="/Music" render={() => <Music />} />
          <Route path="/Setting" render={() => <Setting />} />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
