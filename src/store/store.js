import logger from 'redux-logger'
import { incrementReducer } from './myreducers'
import { createStore, combineReducers, applyMiddleware} from 'redux'
import { thunk } from 'redux-thunk'
export const store = createStore(incrementReducer, applyMiddleware(thunk, logger))

