import React from 'react';
import Button from '../Button/Button.js';
import './QuestionsToType.css';

const QuestionsToType = (props) => {
    const index = props.index;
    const value = props.value;

    return (
        <div className='question-to-type-container' key={`question-${index}`}>
            <div className="question-to-type">
            <label htmlFor={`question-${index}`}>Question text</label><br />
            <input
                onChange={(event) => props.handleInputChange(index, event.target.value)}
                type='text'
                id={`question-${index}`}
                value={value}
                placeholder='Write your question here'
            />
            </div>
            <div className="remove-button">
            {index !== 0 ? <Button onClick={(event) => props.handleRemoveClick(index, event.target)} color="white" text="Remove" /> : null }
            </div>
        </div>
    )
};

export default QuestionsToType;
