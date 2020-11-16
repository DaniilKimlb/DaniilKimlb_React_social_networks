import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
const ItemDialogsInf = [
  { id: 1, name: 'Ivan' },
  { id: 2, name: 'Max' },
  { id: 3, name: 'Anton' },
  { id: 4, name: 'Grisha' },
  { id: 5, name: 'Misha' },
];
const MessageI = [
  { id: 1, message: 'Hi!' },
  { id: 2, message: 'How are do?' },
  { id: 3, message: 'Yo' },
  { id: 4, message: 'My' },
  { id: 5, message: 'Niggas' },
];
const MessagePo = [
  { id: 1, message: "It's my life!!!", like: 48 },
  { id: 2, message: 'How are you do?', like: 14 },
];
ReactDOM.render(
  <React.StrictMode>
    <App
      ItemDialogsInf={ItemDialogsInf}
      MessageI={MessageI}
      MessagePo={MessagePo}
    />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
