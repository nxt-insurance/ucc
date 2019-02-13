import React from 'react'
import { connect } from 'react-redux'
import { css, StyleSheet } from 'aphrodite/no-important'

import { addAnswer, addQuestion, changeMessage, removeMessage } from './store/actionCreators'
import Button from './components/Button.js'
import MessagesToType from './components/MessagesToType'
import { MessagesToShow } from './components/MessagesToShow'

const App = props => {
  return (
    <div className={css(styles.mainContainer)}>
      <div className={css(styles.writeSection)}>
        <div className={css(styles.buttonContainer)}>
          <Button onClick={props.addQuestion} color="white" text="Add question" size="long" />
          <Button onClick={props.addAnswer} color="blue" text="Add answer" size="long" />
        </div>
        <div>
          {props.messages.map((value, index) => (
            <MessagesToType
              index={index}
              value={value.text}
              type={value.type}
              key={'write-q' + index}
              handleChangeMessage={props.changeMessage}
              handleRemoveMessage={props.removeMessage}
            />
          ))}
        </div>
      </div>

      <div className={css(styles.seeSection)}>
        <div>
          {props.messages.map((item, index, array) => (
            <MessagesToShow key={'see-q' + index} index={index} item={item.text} type={item.type} />
          ))}
        </div>
      </div>
    </div>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    boxSizing: 'border-box',
  },

  writeSection: {
    float: 'left',
    padding: '1.5rem',
    width: '50%',
    boxSizing: 'border-box',
    borderRight: '1px solid grey',
    minHeight: '100vh',
  },

  buttonContainer: {
    display: 'flex',
    justifyContent: 'space-between',
  },

  seeSection: {
    float: 'right',
    height: '100vh',
    padding: '1.5rem',
    width: '50%',
    boxSizing: 'border-box',
  },
})

const mapStateToProps = state => ({
  messages: state.chat,
})

const mapDispatchToProps = {
  addQuestion,
  addAnswer,
  changeMessage,
  removeMessage,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
