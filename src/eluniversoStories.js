import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import 'babel-polyfill';

import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

import store from './store';

require('./styles/app.css');

const rootEl = document.getElementById('root');

render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootEl,
);

if (module.hot) {
  module.hot.accept('./components/App', () => {
    const NextApp = require('./components/App').default;
    render(
      <Provider store={store}>
        <NextApp />
      </Provider>,
      rootEl,
    );
  });
}

registerServiceWorker();
