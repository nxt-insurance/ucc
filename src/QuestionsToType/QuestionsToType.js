import React from 'react';
import './QuestionsToType.css';

const QuestionsToType = (props) => {
    const index = props.index;
    const value = props.value;

    return (
        <div className='question-to-type' key={`question-${index}`}>
            <label htmlFor={`question-${index}`}>Question text</label><br />
            <input
                onChange={(event) => props.handleInputChange(index, event.target.value)}
                type='text'
                id={`question-${index}`}
                value={value}
                placeholder='Write your question here'
            />
            {index !== 0 ? <button onClick={(event) => props.handleRemoveClick(index, event.target)}>Remove</button> : null }
        </div>
    )
};

export default QuestionsToType;
