import { createStore, combineReducers } from 'redux'

import { chatReducer, counterReducer } from './reducers'

const appReducer = combineReducers({
  chat: chatReducer,
  counter: counterReducer,
})

const store = createStore(
  appReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store
