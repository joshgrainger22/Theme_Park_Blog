import { createStore, combineReducers, applyMiddleware } from 'redux'
import { combineWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

const store = createStore(() => ({}))

export default store
