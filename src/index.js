import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './redux/state-Redux';
import { Provider } from 'react-redux';
// import { Provider } from 'react-redux';

let reactPortThree = () => {
  ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>,
    document.getElementById('root')
  );
};
reactPortThree();
store.subscribe(() => {
  let av = store.getState();
  reactPortThree(av);
});
