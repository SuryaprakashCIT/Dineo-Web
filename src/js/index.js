import 'babel-polyfill';
import React from 'react';
import ReactDOM from "react-dom";
import {Provider} from 'react-redux';
import {browserHistory} from 'react-router';
import configureStore from'./stores'
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import createLogger from 'redux-logger';
import App from './components/App';

const initialStoreState = {};
const store = configureStore(initialStoreState, browserHistory);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
