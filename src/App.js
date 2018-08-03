import React, {Component} from 'react';
import './App.css';


const QuestionsToType = (props) => {
    const index = props.index;
    const value = props.value;

    return (
        <div key={`question-${index}`}>
            <label htmlFor={`question-${index}`}>Question text</label>
            <input
                onChange={(event) => props.handleInputChange(index, event.target.value)}
                type="text"
                id={`question-${index}`}
                value={value}
                placeholder="Write your question here"
            />
            <button onClick={(event) => this.props.handleAddClick(index, event.target.value)}>Add</button>
        </div>
    )
}

function AnswersToType(props) {
    return (
        <div key={`answer-${props.index}`}>
            <label htmlFor={`answer-${props.index}`}>Answer text</label>
            <input type="txt" id={`answer-${props.index}`} placeholder="Write your answers here"/>
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
        <div key={`answersToShow-${props.index}`}>
            <div>{props.item}</div>
        </div>
    )
}

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            questions: ['question 1', 'question 2'],
            answers: []
        }
    }

    handleClickQuestion = (text) => {
        this.setState({
            questions: this.state.questions.concat(text)
        });
    };

    handleClickAnswer = (event) => {
        this.setState({
            answers: this.state.answers.concat('Give your answer here')
        });
    };

    handleInputChange = (index, newText) => {
        this.setState({
            questions: this.state.questions.map((currentText, i) => {
                if (i === index) {
                    return newText
                } else {
                    return currentText
                }
            })
        })
    }

    handleAddClick = (event) => {
        console.log(this.state.value);
    }

    render() {

        return (
            <div>
                Number of questions {this.state.questions.length}
                <div className="write-section">
                    <div>
                        <button onClick={this.handleClickQuestion}>Add question</button>
                        <button onClick={this.handleClickAnswer}>Add answer</button>
                    </div>
                    <div>
                        <div>{this.state.questions.map((value, index) => <QuestionsToType
                            index={index}
                            value={value}
                            key={"asdef" + index}
                            handleInputChange={this.handleInputChange}
                        />)}</div>
                        <div>{this.state.answers.map((item, index) => <AnswersToType index={index} item={item} key={"asdhf" + index}/>)}</div>
                    </div>
                </div>
                <div className="see-section">
                    <div>{this.state.questions.map((item, index) => <QuestionsToShow key={"adsdf" + index} index={index} item={item}/>)}</div>
                    <div>{this.state.answers.map((item, index) => <AnswersToShow key={"asadf" + index} index={index} item={item}/>)}</div>
                </div>
            </div>
        );
    }
}

export default App;
