import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/App';
import configureStore from './stores/configureStore';
import { loadState, saveState } from './localStorage';
import registerServiceWorker from './registerServiceWorker';

const persistedState = loadState();
const store = configureStore(persistedState);
store.subscribe(() => {
  saveState({ columns: store.getState().columns });
});

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
