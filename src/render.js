import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

export let reactPortThree = (state, getPost) => {
  ReactDOM.render(
    <React.StrictMode>
      <App
        Dialog={state.DialogPage}
        Profile={state.ProfilePage}
        Nav={state.NavPage}
        getPost={getPost}
      />
    </React.StrictMode>,
    document.getElementById('root')
  );
};
