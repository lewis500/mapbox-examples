//@flow
import React, {
  Component
} from 'react';
import ReactDOM from 'react-dom';
import {
  createStore
} from 'redux';
import {
  Provider
} from 'react-redux';
import App from './app';

const reducer = (state = {
  color: 'blue'
}, action) => {
  switch (action.type) {
    case 'PICK_COLOR':
      return {
        color: action.color
      };
    default:
      return state;
  }
};

let store = createStore(reducer);

var template = (
  <Provider store={store}>
    <App />
  </Provider>
);
ReactDOM.render(template, document.getElementById('root'));
