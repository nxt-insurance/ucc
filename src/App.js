import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  addAnswer,
  addQuestion,
  changeMessage,
  removeMessage,
  incrementCounter,
  decrementCounter,
} from './store/actionCreators'
import Button from './components/Button.js'
import MessagesToType from './components/MessagesToType'
import { MessagesToShow } from './components/MessagesToShow'
import { StyleSheet, css } from 'aphrodite/no-important'

class App extends Component {
  render() {
    return (
      <div className={css(styles.mainContainer)}>
        <div className={css(styles.writeSection)}>
          <div className={css(styles.buttonContainer)}>
            <Button
              onClick={this.props.addQuestion}
              color="white"
              text="Add question"
              size="long"
            />
            <Button onClick={this.props.addAnswer} color="blue" text="See answer" size="long" />
          </div>
          <div className={css(styles.buttonContainer)}>
            <Button
              onClick={this.props.incrementCounter}
              color="white"
              text="Counter +"
              size="long"
            />
            <Button
              onClick={this.props.decrementCounter}
              color="blue"
              text="Counter -"
              size="long"
            />
          </div>
          <div className={css(styles.counter)}>Start counting: {this.props.counter}</div>
          <div>
            <div>
              {this.props.messages.map((value, index) => (
                <MessagesToType
                  index={index}
                  value={value.text}
                  type={value.type}
                  key={'write-q' + index}
                  handleChangeMessage={this.props.changeMessage}
                  handleRemoveMessage={this.props.removeMessage}
                />
              ))}
            </div>
          </div>
        </div>
        <div className={css(styles.seeSection)}>
          <div>
            {this.props.messages.map((item, index, array) => (
              <MessagesToShow
                key={'see-q' + index}
                index={index}
                item={item.text}
                type={item.type}
                hasCounter={index === array.length - 1}
                counter={this.props.counter}
              />
            ))}
          </div>
        </div>
      </div>
    )
  }
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
  counter: {
    padding: '2rem',
    backgroundColor: 'yellow',
    fontWeight: 'bold',
    marginBottom: '2rem',
  },
})

const mapStateToProps = state => ({
  messages: state.chat,
  counter: state.counter,
})

const mapDispatchToProps = {
  addQuestion,
  addAnswer,
  changeMessage,
  removeMessage,
  incrementCounter,
  decrementCounter,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
