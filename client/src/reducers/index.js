import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';

import fileReducer from './fileReducer';
import userReducer from './userReducer';

const rootReducer = combineReducers({ fileReducer, userReducer });

export const store = createStore(rootReducer, applyMiddleware(thunk));
