// @flow

import * as actionTypes from './actionTypes'

export const chatReducer = (
  state = [
    { text: 'question 0', type: 'question', localCounter: 0 },
    { text: 'answer 0', type: 'answer', localCounter: 0 },
  ],
  action
) => {
  switch (action.type) {
    case actionTypes.ADD_QUESTION:
      return [
        ...state,
        {
          text: 'question',
          type: 'question',
          localCounter: 0,
        },
      ]

    case actionTypes.ADD_ANSWER:
      return [
        ...state,
        {
          text: 'answer',
          type: 'answer',
          localCounter: 0,
        },
      ]
    case actionTypes.CHANGE_MESSAGE:
      return state.map((currentMessage, i) => {
        if (i === action.data.index) {
          return {
            text: action.data.newText,
            type: currentMessage.type,
            localCounter: currentMessage.localCounter,
          }
        } else {
          return currentMessage
        }
      })

    case actionTypes.INCREMENT_LOCAL_COUNTER:
      return state.map((currentMessage, i) => {
        if (i === action.data.index) {
          return {
            text: currentMessage.text,
            type: currentMessage.type,
            localCounter: ++currentMessage.localCounter,
          }
        } else {
          return currentMessage
        }
      })

    case actionTypes.DECREMENT_LOCAL_COUNTER:
      return state.map((currentMessage, i) => {
        if (i === action.data.index) {
          return {
            text: currentMessage.text,
            type: currentMessage.type,
            localCounter: --currentMessage.localCounter,
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

export const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case actionTypes.INCREMENT_COUNTER:
      return ++state

    case actionTypes.DECREMENT_COUNTER:
      return state <= 0 ? 0 : --state

    default:
      return state
  }
}
