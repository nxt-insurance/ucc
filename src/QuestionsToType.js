import React from 'react';

const QuestionsToType = (props) => {
    const index = props.index;
    const value = props.value;

    return (
        <div key={`question-${index}`}>
            <label htmlFor={`question-${index}`}>Question text</label>
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

export {QuestionsToType};