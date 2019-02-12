import React from 'react'
import Button from './Button.js'
import { StyleSheet, css } from 'aphrodite/no-important'

const MessagesToType = props => {
  const index = props.index
  const value = props.value
  const type = props.type

  let inputStyle = [styles.messageInput]
  let messageContainer = [styles.messageContainer]

  if (type === 'answer') {
    inputStyle.push(styles.answer)
    messageContainer.push(styles.answerPosition)
  }
  return (
    <div className={css(messageContainer)} key={`question-${index}`}>
      <div className={css(styles.message)}>
        <label className={css(styles.messageLabel)} htmlFor={`question-${props.localCounter}`}>
          {type === 'question' ? 'Question text' : 'Answer text'}
        </label>
        <br />
        <input
          className={css(inputStyle)}
          onChange={event => props.handleChangeMessage(index, event.target.value)}
          type="text"
          id={`question-${index}`}
          value={value}
          placeholder="Write your question here"
        />
      </div>
      <button onClick={props.handleIncrementLocalCounter}>+</button>
      <button onClick={props.handleDecrementLocalCounter}>-</button>
      <div>
        {index !== 0 && (
          <Button
            onClick={event => props.handleRemoveMessage(index, event.target)}
            color="blue"
            size="short"
            text="Remove"
          />
        )}
      </div>
    </div>
  )
}

const styles = StyleSheet.create({
  messageContainer: {
    display: 'flex',
  },

  answerPosition: {
    justifyContent: 'flex-end',
  },

  message: {
    marginBottom: '2rem',
  },

  messageLabel: {
    fontSize: '0.8rem',
    color: 'dimgrey',
  },

  messageInput: {
    fontSize: '1.2rem',
    color: 'dimgrey',
    borderTop: 'none',
    borderRight: 'none',
    borderBottom: '1px solid blue',
    borderLeft: 'none',
    minWidth: '400px',
    marginBottom: '1rem',
    marginRight: '2rem',
  },

  answer: {
    borderBottom: '1px solid #3df2c0',
  },
})

export default MessagesToType
