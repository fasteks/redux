// file made to keep the store - obj made by certain rules and content
import { createStore, compose, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import createRootReducer from './reducers'

const middleware = [thunk]
const initialState = {}

const composeFunc = process.env.NODE_ENV === 'development' ? composeWithDevTools : compose
const composeEnchanters = composeFunc(applyMiddleware(...middleware))
const store = createStore(createRootReducer(), initialState, composeEnchanters)

export default store
