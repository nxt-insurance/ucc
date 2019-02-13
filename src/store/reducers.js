import * as actionTypes from './actionTypes'

export const chatReducer = (
  state = [],
  action
) => {
  switch (action.type) {
    case actionTypes.ADD_QUESTION:
      return [
        ...state,
        {
          text: 'Question',
          type: 'question',
        },
      ]

    case actionTypes.ADD_ANSWER:
      return [
        ...state,
        {
          text: 'Answer',
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
