import { createStore } from 'redux'
import * as actionTypes from './actionTypes'

const initialState = {
  chat: [{ text: 'question 0', type: 'question' }, { text: 'answer 0', type: 'answer' }],
  counter: 0,
}

const chatReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_QUESTION:
      return {
        ...state,
        chat: [
          ...state.chat,
          {
            text: 'question',
            type: 'question',
          },
        ],
      }

    // case actionTypes.LOAD_QUESTIONS:
    //   return action.data

    case actionTypes.ADD_ANSWER:
      return {
        ...state,
        chat: [
          ...state.chat,
          {
            text: 'answer',
            type: 'answer',
          },
        ],
      }

    case actionTypes.CHANGE_MESSAGE:
      const chatWithChangedMessage = state.chat.map((currentMessage, i) => {
        if (i === action.data.index) {
          return {
            text: action.data.newText,
            type: currentMessage.type,
          }
        } else {
          return currentMessage
        }
      })

      return {
        ...state,
        chat: chatWithChangedMessage,
      }

      case actionTypes.REMOVE_MESSAGE:
      const chatWithRemovedMessage = state.chat.filter((el, i) => {
        return i !== action.data.index
      })
      return {
        ...state,
        chat: chatWithRemovedMessage,
      }

    case actionTypes.INCREMENT_COUNTER:
      return {
        ...state,
        counter: ++state.counter,
      }

    case actionTypes.DECREMENT_COUNTER:
      return {
        ...state,
        counter: state.counter <= 0 ? 0 : --state.counter,
      }

    default:
      return state
  }
}

const store = createStore(
  chatReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store
