import React from 'react'
import Button from './Button.js'
import { StyleSheet, css } from 'aphrodite'

const MessagesToType = props => {
  const index = props.index
  const value = props.value
  const type = props.type

  let inputStyle = [styles.messageInput]

  if (type === 'answer') {
    inputStyle.push(styles.answer)
  }

  return (
    <div className={css(styles.messageContainer)} key={`question-${index}`}>
      <div className={css(styles.message)}>
        <label className={css(styles.messageLabel)} htmlFor={`question-${index}`}>
          {type === 'question' ? 'Question text' : 'Answer text'}
        </label>
        <br />
        <input
          className={css(inputStyle)}
          onChange={event => props.handleInputChange(index, event.target.value)}
          type="text"
          id={`question-${index}`}
          value={value}
          placeholder="Write your question here"
        />
      </div>
      <div>
        {index !== 0 && (
          <Button
            onClick={event => props.handleRemoveClick(index, event.target)}
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
    minWidth: '400px',
    marginBottom: '1rem',
    marginRight: '2rem',
  },

  answer: {
    borderBottom: '1px solid #3df2c0',
  },
})

export default MessagesToType
