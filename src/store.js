import { createStore } from 'redux'
import { combineReducers } from 'redux'

import { chatReducer, counterReducer } from './reducers'

// const appReducer = (state = {}, action) => {
//   return {
//     chat: chatReducer(state.chat, action),
//     counter: counterReducer(state.counter, action),
//   }
// }

const appReducer = combineReducers({
  chat: chatReducer,
  counter: counterReducer,
})

const store = createStore(
  appReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store
