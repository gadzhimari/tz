import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from '../reducers';

const configureStore = (preloadedState) => {
  return createStore(
    reducers,
    preloadedState,
    composeWithDevTools(),
  );
}

export default configureStore;
