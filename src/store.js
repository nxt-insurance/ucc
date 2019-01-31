import { createStore } from 'redux'
import * as actionTypes from './actionTypes'

const initialState = {
  chat: [{ text: 'question 0', type: 'question' }, { text: 'answer 0', type: 'answer' }],
  counter: 0,
}

const chatReducer = (state = [], action) => {
  switch (action.type) {
    case actionTypes.ADD_QUESTION:
      return [
        ...state,
        {
          text: 'question',
          type: 'question',
        },
      ]

    case actionTypes.ADD_ANSWER:
      return [
        ...state,
        {
          text: 'answer',
          type: 'answer',
        },
      ]
    case actionTypes.CHANGE_MESSAGE:
      return state.map((currentMessage, i) => {
        if (i === action.data.index) {
          return {
            text: action.data.newText,
            type: currentMessage.type,
          }
        } else {
          return currentMessage
        }
      })

    case actionTypes.REMOVE_MESSAGE:
      return state.filter((el, i) => {
        return i !== action.data.index
      })

    default:
      return state
  }
}

const counterReducer = (state, action) => {
  switch (action.type) {
    case actionTypes.INCREMENT_COUNTER:
      return ++state

    case actionTypes.DECREMENT_COUNTER:
      return state <= 0 ? 0 : --state

    default:
      return state
  }
}

const appReducer = (state = initialState, action) => {
  return {
    chat: chatReducer(state.chat, action),
    counter: counterReducer(state.counter, action),
  }
}

const store = createStore(
  appReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store
