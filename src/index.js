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

let reactPortThree = () => {
  ReactDOM.render(
    <React.StrictMode>
      <App state={store.state} store={store} />
    </React.StrictMode>,
    document.getElementById('root')
  );
};
reactPortThree();
store.subscribe(reactPortThree);
