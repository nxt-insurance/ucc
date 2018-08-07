import React from 'react';
import Button from './Button.js';
import { StyleSheet, css } from 'aphrodite';

const QuestionsToType = (props) => {
    const index = props.index;
    const value = props.value;

    return (
        <div className={css(styles.questionToTypeContainer)} key={`question-${index}`}>
            <div className={css(styles.questionToType)}>
            <label
                className={css(styles.questionToTypeLabel)}
                htmlFor={`question-${index}`}>
                Question text
            </label><br />
            <input
                className={css(styles.questionToTypeInput)}
                onChange={(event) => props.handleInputChange(index, event.target.value)}
                type='text'
                id={`question-${index}`}
                value={value}
                placeholder='Write your question here'
            />
            </div>
            <div>
            {index !== 0 ? <Button onClick={(event) => props.handleRemoveClick(index, event.target)} color="white" text="Remove" /> : null }
            </div>
        </div>
    )
};

const styles = StyleSheet.create({
    questionToTypeContainer: {
        display: 'flex'
    },

    questionToType: {
        marginBottom: '2rem'
    },

    questionToTypeLabel: {
        fontSize: '0.8rem',
        color: 'dimgrey'
    },

    questionToTypeInput: {
        fontSize: '1.2rem',
        color: 'dimgrey',
        borderTop: 'none',
        borderRight: 'none',
        borderBottom: '1px solid blue',
        minWidth: '400px',
        marginBottom: '1rem',
        marginRight: '2rem'
    }

});

export default QuestionsToType;