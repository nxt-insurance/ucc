import React, { Fragment } from 'react'

import carla from '../carla.png'
import { StyleSheet, css } from 'aphrodite/no-important'

function MessagesToShow(props) {
  const type = props.type

  let messageContainer = [styles.messageContainer]
  let avatar = [styles.avatar]
  let message = [styles.message]
  let notification = [styles.notification]

  if (type === 'answer') {
    messageContainer.push(styles.answerPosition)
    avatar.push(styles.avatarHidden)
    message.push(styles.answer)
  }

  return (
    <Fragment>
      <div className={css(messageContainer)} key={`questionToShow-${props.index}`}>
        <img className={css(avatar)} src={carla} alt="Avatar of Carla" />
        {type === 'answer' && <div className={css(notification)}>Your answer is:</div>}
        <div className={css(message)}>
          {props.item}
          &nbsp;
          {props.hasCounter && <span>The current counter is {props.counter}</span>}
        </div>
      </div>
    </Fragment>
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
    marginBottom: '1.5rem',
  },

  answer: {
    color: 'white',
    backgroundColor: 'blue',
    borderRadius: '20px 20px 5px 20px',
  },
  notification: {
    color: 'dimgrey',
    padding: '15px',
    marginBottom: '1.5rem',
    borderBottom: '1px solid #3df2c0',
    borderLeft: '1px solid #3df2c0',
  },
})

export { MessagesToShow }
