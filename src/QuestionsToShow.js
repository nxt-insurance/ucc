import React from 'react';
import carla from "./carla.png";

function QuestionsToShow(props) {
    return (
        <div className='question-to-show' key={`questionToShow-${props.index}`}>
            <img className="avatar-to-show" src={carla} alt='Avatar of Carla'/>
            <div className='text-to-show' >{props.item}</div>
        </div>
    )
}

export {QuestionsToShow};