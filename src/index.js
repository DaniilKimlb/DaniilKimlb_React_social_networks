import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import state, {
  getMessage,
  getPost,
  getText,
  getTextM,
  subscribe,
} from './redux/state';
import reactRouterDom from 'react-router-dom';
import store from './redux/state';
// reactPortThree(state, getPost, getText, getMessage, getTextM);

let reactPortThree = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <App state={state} dispatch={store.dispatch.bind(store)} />
    </React.StrictMode>,
    document.getElementById('root')
  );
};
reactPortThree(store.getState());
store.subscribe(reactPortThree);
