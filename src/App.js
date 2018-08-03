import React, {Component} from 'react';
import './App.css';


const questions = ["Cake gummies carrot cake cake sweet roll muffin.",
    "Cake lemon drops sugar plum jujubes caramels sesame snaps cake topping.",
    "Fruitcake powder cupcake chocolate pie wafer sweet roll.",
    "Chocolate cake macaroon chocolate bar tart sweet roll liquorice bonbon cupcake cake.",
    "Tiramisu tootsie roll cotton candy cheesecake topping. Cotton candy lollipop topping candy canes.",
    "Marshmallow halvah danish."];

const answers = ["Liquorice chocolate gummi bears cake sweet.",
    "Jelly-o cupcake sweet roll ice cream brownie.",
    "Topping jujubes cupcake gummi bears soufflé icing caramels chocolate bar gummi bears.",
    "Powder halvah soufflé sugar plum powder.",
    "Chocolate cake pudding cake halvah wafer bear claw dragée gummi bears.",
    "Pastry soufflé cake cotton candy jelly-o topping pie candy lollipop."
];


function QuestionsToType(props) {
    return (
        <div key={`question-${props.index}`}>
            <label htmlFor={`question-${props.index}`}>Question text</label>
            <input type="txt" id={`question-${props.index}`} value={props.item}/>
            <button>Add</button>
        </div>
    )
}

function AnswersToType(props) {
    return (
        <div key={`answer-${props.index}`}>
            <label htmlFor={`answer-${props.index}`}>Answer text</label>
            <input type="txt" id={`answer-${props.index}`} value={props.item}/>
            <button>Add</button>
        </div>
    )
}


function QuestionsToShow(props) {
    return (
        <div key={`questionToShow-${props.index}`}>
            <div>{props.item}</div>
        </div>
    )
}

function AnswersToShow(props) {
    return (
        <div key={`questionToShow-${props.index}`}>
            <div>{props.item}</div>
        </div>
    )
}

class App extends Component {

    handleClickQuestion = (event) => {
        console.log("Male pieski");
    };

    render() {

        return (
            <div>
                <div className="write-section">
                    <div>
                        <button onClick={this.handleClickQuestion}>Add question</button>
                        <button>Add answer</button>
                    </div>
                    <div>
                        <div>{questions.map((item, index) => <QuestionsToType index={index} item={item}/>)}</div>
                        <div>{answers.map((item, index) => <AnswersToType index={index} item={item}/>)}</div>
                    </div>
                </div>
                <div className="see-section">
                    <div>{questions.map((item, index) => <QuestionsToShow index={index} item={item}/>)}</div>
                    <div>{answers.map((item, index) => <AnswersToShow index={index} item={item}/>)}</div>
                </div>
            </div>
        );
    }
}

export default App;
