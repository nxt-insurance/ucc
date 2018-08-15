import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addAnswer, addQuestion, changeMessage, removeMessage } from './actionCreators'
import Button from './components/Button.js'
import MessagesToType from './components/MessagesToType'
import { MessagesToShow } from './components/MessagesToShow'
import { StyleSheet, css } from 'aphrodite/no-important'

class App extends Component {
  //
  // handleChangeMessage = (index, newText) => {
  // this.props.changeMessage(index, newText)
  // };
  //
  // handleRemoveMessage = index => {
  // this.props.removeMessage(index);
  // };

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
            {this.props.messages.map((item, index) => (
              <MessagesToShow
                key={'see-q' + index}
                index={index}
                item={item.text}
                type={item.type}
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
})

const mapStateToProps = state => ({
  messages: state,
})

const mapDispatchToProps = {
  addQuestion,
  addAnswer,
  changeMessage,
  removeMessage,
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
