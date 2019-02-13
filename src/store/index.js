import { createStore, combineReducers } from 'redux'

import { chatReducer } from './reducers'

const appReducer = combineReducers({
  chat: chatReducer,
})

const store = createStore(
  appReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store
