import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './redux/state-Redux';
// reactPortThree(state, getPost, getText, getMessage, getTextM);

let reactPortThree = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <App state={state} dispatch={store.dispatch.bind(store)} store={store} />
    </React.StrictMode>,
    document.getElementById('root')
  );
};
reactPortThree(store.getState());
store.subscribe(() => {
  let da = store.getState();
  reactPortThree(da);
});
