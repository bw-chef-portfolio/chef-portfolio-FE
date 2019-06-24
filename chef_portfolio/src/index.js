import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import './index.css';
import App from './App';
import thunk from 'redux-thunk';;
import logger from 'redux-logger';
import rootReducer from "./reducers";

const store = createStore(
    rootReducer, applyMiddleware(thunk, logger)
  );

ReactDOM.render(
<Provider store={store}>
    <App />
</Provider>,
 document.getElementById('root'));


