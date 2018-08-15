import React from 'react'
import carla from '../carla.png'
import { StyleSheet, css } from 'aphrodite/no-important'

function MessagesToShow(props) {
  const type = props.type

  let messageContainer = [styles.messageContainer]
  let avatar = [styles.avatar]
  let message = [styles.message]

  if (type === 'answer') {
    messageContainer.push(styles.answerPosition)
    avatar.push(styles.avatarHidden)
    message.push(styles.answer)
  }

  return (
    <div className={css(messageContainer)} key={`questionToShow-${props.index}`}>
      <img className={css(avatar)} src={carla} alt="Avatar of Carla" />
      <div className={css(message)}>{props.item}</div>
    </div>
  )
}

const styles = StyleSheet.create({
  messageContainer: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
  },

  answerPosition: {
    justifyContent: 'flex-end',
  },

  avatar: {
    height: '3.5rem',
    width: '3.5rem',
    borderRadius: '50%',
    margin: '1rem',
  },

  avatarHidden: {
    display: 'none',
  },

  message: {
    color: 'dimgrey',
    padding: '15px',
    width: '50%',
    backgroundColor: '#eeeeee',
    borderRadius: '20px 20px 20px 5px',
    marginBottom: '1.5rem'
  },

  answer: {
    color: 'white',
    backgroundColor: 'blue',
    borderRadius: '20px 20px 5px 20px',
  },
})

export { MessagesToShow }
