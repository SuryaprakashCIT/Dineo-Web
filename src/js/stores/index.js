import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import reducers from '../reducers';
const devToolsExtension = () => (window.devToolsExtension ? window.devToolsExtension() : f => f);
const getMiddleware = (history) => {
    return applyMiddleware(thunkMiddleware)(createStore);
};
  
const createStoreWithMiddleware = (initialState, history) => {
  const middleware = getMiddleware(history);
    return middleware(reducers, initialState, devToolsExtension());

};

export default function configureStore(initialState, history) {
  const store = createStoreWithMiddleware(initialState, history);
  return store;
}
