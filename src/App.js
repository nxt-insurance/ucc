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

class App extends Component {

    handleClickQuestion = (event) => {
        console.log("Male pieski");
    };

    render() {

        const QuestionsToType = questions.map((item, index) => {
            return <div key={`question-${index}`}>
                <label htmlFor={`question-${index}`}>Question text</label>
                <input type="txt" id={`question-${index}`} value={item}/>
                <button>Add</button>
            </div>
        });

        const AnswersToType = answers.map((item, index) => {
            return <div key={`question-${index}`}>
                <label htmlFor={`answer-${index}`}>Answer text</label>
                <input type="txt" id={`answer-${index}`} value={item}/>
                <button>Add</button>
            </div>
        });

        const QuestionsToShow = questions.map((item, index) => {
            return <div key={`questionToShow-${index}`}>
                <div>{item}</div>
            </div>
        });

        const AnswersToShow = questions.map((item, index) => {
            return <div key={`questionToShow-${index}`}>
                <div>{item}</div>
            </div>
        });


        return (
            <div>
                <div className="write-section">
                    <div>
                        <button onClick={this.handleClickQuestion}>Add question</button>
                        <button>Add answer</button>
                    </div>
                    <div>
                        <div>{QuestionsToType}</div>
                        <div>{AnswersToType}</div>
                    </div>
                </div>
                <div className="see-section">
                    <div>{QuestionsToShow}</div>
                    <div>{AnswersToShow}</div>
                </div>
            </div>
        );
    }
}

export default App;
