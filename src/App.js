import React, {Component} from 'react';
import {QuestionsToType} from './QuestionsToType';
import {QuestionsToShow} from "./QuestionsToShow";
import './App.css';

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
        if (this.state.questions.indexOf('question 0') !== index) {
            this.setState({
                questions: this.state.questions.filter((el, i) => {
                    return i !== index;
                })
            })
        }
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
