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
                type='text'
                id={`question-${index}`}
                value={value}
                placeholder='Write your question here'
            />
            <button onClick={(event) => props.handleRemoveClick(index, event.target)}>Remove</button>
        </div>
    )
};


function QuestionsToShow(props) {
    return (
        <div key={`questionToShow-${props.index}`}>
            <div>{props.item}</div>
        </div>
    )
}



class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            questions: ['question 0']
        }
    }

    handleClickQuestion = () => {
        this.setState({
            questions: this.state.questions.concat('question ' + this.state.questions.length)
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
    };

    handleRemoveClick = (index) => {
        if (this.state.questions.length > 1) {
        this.setState({
            questions: this.state.questions.filter((el, i) => {
                return i !== index;
            })
        })}
    };

    render() {

        return (
            <div>
                Number of questions {this.state.questions.length}
                <div className='write-section'>
                    <div>
                        <button onClick={this.handleClickQuestion}>Add question</button>
                    </div>
                    <div>
                        <div>{this.state.questions.map((value, index) => <QuestionsToType
                            index={index}
                            value={value}
                            key={'write-q' + index}
                            handleInputChange={this.handleInputChange}
                            handleRemoveClick={this.handleRemoveClick}
                        />)}</div>
                    </div>
                </div>
                <div className="see-section">
                    <div>{this.state.questions.map((item, index) => <QuestionsToShow
                        key={"see-q" + index}
                        index={index}
                        item={item}
                    />)}</div>
                </div>
            </div>
        );
    }
}

export default App;
