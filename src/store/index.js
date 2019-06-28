import {createStore, applyMiddleware} from 'redux';
import promise from 'redux-promise';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import locaStorage, {loadState} from '../middlewares/locaStorage';
import apiMiddleware from '../middlewares/api';

import rootReducer from '../reducers';


const store = createStore(rootReducer, applyMiddleware(apiMiddleware('http://localhost:3000/api'),thunk, promise,locaStorage('todos'), logger));

export default store;