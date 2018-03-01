import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reduce from './reduces'
import './style/index.css';
import App from './components/App';
import './config/rem'
import registerServiceWorker from './registerServiceWorker';

const store = createStore(reduce)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
