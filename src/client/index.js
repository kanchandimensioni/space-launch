import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './components/Home';
import './styles.scss';

import createStore from './store';

const store = createStore();

export default App;

ReactDOM.hydrate(
  <Provider store={store}>
    <Home />
  </Provider>,
  document.getElementById('app'),
);
