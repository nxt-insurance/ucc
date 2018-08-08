import React from 'react'
import { StyleSheet, css } from 'aphrodite'

class Button extends React.Component {
  render() {
    let buttonStyles = [styles.mainButton]

    if (this.props.color === 'blue') {
      buttonStyles.push(styles.mainButtonBlue)
    } else if (this.props.color === 'white') {
      buttonStyles.push(styles.mainButtonWhite)
    } else {
      throw new Error(`Color ${this.props.color} is not supported`)
    }

    if (this.props.size === 'long') {
      buttonStyles.push(styles.mainButtonLong)
    } else if (this.props.size === 'short') {
      buttonStyles.push(styles.mainButtonShort)
    } else {
      throw new Error(`Color ${this.props.size} is not supported`)
    }

    return (
      <div>
        <button className={css(buttonStyles)} onClick={this.props.onClick}>
          {this.props.text}
        </button>
      </div>
    )
  }
}

const styles = StyleSheet.create({
  mainButton: {
    height: '3rem',
    verticalAlign: 'center',
    textTransform: 'uppercase',
    fontSize: '1rem',
    fontWeight: '700',
    padding: '1rem 2.5rem',
    border: '1px solid blue',
    borderRadius: '5px',
    marginBottom: '1.5rem',
  },

  mainButtonWhite: {
    backgroundColor: 'white',
    color: 'blue',
  },

  mainButtonBlue: {
    color: 'white',
    backgroundColor: 'blue',
  },

  mainButtonLong: {
    width: '15rem',
  },

  mainButtonShort: {
    width: '10rem',
  },
})

export default Button
