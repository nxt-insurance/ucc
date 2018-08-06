import React from 'react';


function QuestionsToShow(props) {
    return (
        <div key={`questionToShow-${props.index}`}>
            <div>{props.item}</div>
        </div>
    )
}

export {QuestionsToShow};