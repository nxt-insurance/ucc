import React from 'react';
import { StyleSheet, css } from 'aphrodite';

class Button extends React.Component {

     render() {
         const classes = [styles.mainButton];

         if (this.props.color === 'blue') {
             //className += ' main-button-blue'
             classes.push(styles.mainButtonBlue)
         } else if (this.props.color === 'white'){
             classes.push(styles.mainButtonWhite)
           //  className += ' main-button-white'
         } else {
             throw new Error (`Color ${this.props.color} is not supported`)
         }

        return (
            <div>
                <button className={css(classes)} onClick={this.props.onClick}>{this.props.text}</button>
            </div>
        )
      }
    };


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
        marginBottom: '1.5rem'
    },

    mainButtonBlue: {
        color: 'blue'
},

    mainButtonWhite: {
    color: 'white',
    backgroundColor: 'blue'
}

});

export default Button;
