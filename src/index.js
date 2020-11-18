import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import state, { getPost } from './redux/state';
import reactRouterDom from 'react-router-dom';
import { reactPortThree } from './render';
reactPortThree(state, getPost);
