import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import { Hello } from './components/heyfile';
import reducers from './reducers';

require('./../styles/styles.scss');

const createStoreWithMiddleware = applyMiddleware()(createStore);

let hello = () => {
  console.log('I am the hello function');
};

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Hello />
  </Provider>
  , document.getElementById('app'));
