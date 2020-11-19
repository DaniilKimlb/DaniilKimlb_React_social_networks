import React from 'react';
import './index.css';
import App from './App';
import { getMessage, getPost, getText, getTextM } from './redux/state';
import ReactDOM from 'react-dom';
export let reactPortThree = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <App
        Dialog={state.DialogPage}
        Profile={state.ProfilePage}
        Nav={state.NavPage}
        getPost={getPost}
        getText={getText}
        getMessage={getMessage}
        getTextM={getTextM}
      />
    </React.StrictMode>,
    document.getElementById('root')
  );
};
