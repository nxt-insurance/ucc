import React from 'react';
import './Button.css';

class Button extends React.Component {

     render() {
         let className = 'main-button'
         if (this.props.color === 'blue') {
             className += ' main-button-blue'
         } else if (this.props.color === 'white'){
             className += ' main-button-white'
         } else {
             throw new Error (`Color ${this.props.color} is not supported`)
         }

        return (
            <div>
                <button className={className} onClick={this.props.onClick}>{this.props.text}</button>
            </div>
        )
      }
    };

export default Button;
