import * as actionTypes from './actionTypes'

export const addQuestion = () => {
  return {
    type: actionTypes.ADD_QUESTION,
  }
}

export const addAnswer = () => {
  return {
    type: actionTypes.ADD_ANSWER,
  }
}

export const changeMessage = (index, newText) => {
  return {
    type: actionTypes.CHANGE_MESSAGE,
    data: {
      index,
      newText,
    },
  }
}

export const removeMessage = index => {
  return {
    type: actionTypes.REMOVE_MESSAGE,
    data: {
      index,
    },
  }
}
