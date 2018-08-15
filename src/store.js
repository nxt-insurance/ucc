import {createStore} from 'redux'
import * as actionTypes from './actionTypes'

const initialState = [
    {text: 'question 0', type: 'question'},
    {text: 'answer 0', type: 'answer'},
]

const chatReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_QUESTION:
            return [
                ...state,
                {
                    text: 'question',
                    type: 'question',
                },
            ];
        case actionTypes.ADD_ANSWER:
            return [
                ...state,
                {
                    text: 'answer',
                    type: 'answer',
                },
            ];
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

const store = createStore(chatReducer)

export default store
