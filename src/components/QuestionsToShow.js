import React from 'react';
import carla from "../carla.png";
import { StyleSheet, css } from 'aphrodite';

function QuestionsToShow(props) {
    return (
        <div className={css(styles.questionToShow)} key={`questionToShow-${props.index}`}>
            <img className={css(styles.avatarToShow)} src={carla} alt='Avatar of Carla'/>
            <div className={css(styles.textToShow)} >{props.item}</div>
        </div>
    )
}

const styles = StyleSheet.create({
    questionToShow: {
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'flex-end'
    },

    avatarToShow: {
        height: '3.5rem',
        width: '3.5rem',
        borderRadius: '50%',
        margin: '1rem'
    },

    textToShow: {
        color: 'dimgrey',
        padding: '15px',
        width: '50%',
        backgroundColor: '#eeeeee',
        borderRadius: '20px 20px 20px 5px',
        marginBottom: '1.5rem'
    },

});

export {QuestionsToShow};