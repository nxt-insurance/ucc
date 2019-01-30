import { createStore } from 'redux'
import * as actionTypes from './actionTypes'

const initialState = {
  chat: [{ text: 'question 0', type: 'question' }, { text: 'answer 0', type: 'answer' }],
  counter: 0,
}

const chatReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_QUESTION:
      const ChatWithNewQuestion = [
        ...state.chat,
        {
          text: 'question',
          type: 'question',
        },
      ]
      return {
        chat: ChatWithNewQuestion,
        counter: state.counter,
      }

    // case actionTypes.LOAD_QUESTIONS:
    //   return action.data

    case actionTypes.ADD_ANSWER:
      const chatWithNewAnswer = [
        ...state.chat,
        {
          text: 'answer',
          type: 'answer',
        },
      ]
      return {
        chat: chatWithNewAnswer,
        counter: state.counter,
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
        chat: chatWithChangedMessage,
        counter: state.counter,
      }

    case actionTypes.REMOVE_MESSAGE:
      const chatWithRemovedMessage = state.chat.filter((el, i) => {
        return i !== action.data.index
      })
      return {
        chat: chatWithRemovedMessage,
        counter: state.counter,
      }

    case actionTypes.INCREMENT_COUNTER:
      return {
        chat: state.chat,
        counter: ++state.counter,
      }

    case actionTypes.DECREMENT_COUNTER:
      return {
        chat: state.chat,
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
