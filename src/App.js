import React, {Component} from 'react';
import Button from './components/Button.js';
import QuestionsToType from './components/QuestionsToType';
import {QuestionsToShow} from "./components/QuestionsToShow";
import {StyleSheet, css} from 'aphrodite';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            questions: [
                {text: 'question 0', type: 'question'},
                {text: 'answer 0', type: 'answer'}
            ]
        }
    }

    handleClickQuestion = () => {
        this.setState({
            questions: this.state.questions.concat({text: 'question', type: 'question'})
        });
    };

    handleClickAnswer = () => {
        this.setState({
            questions: this.state.questions.concat({text: 'answer', type: 'answer'})
        });
    };


    handleInputChange = (index, newText) => {
        this.setState({
            questions: this.state.questions.map((currentText, i) => {
                if (i === index) {
                    return (
                        {
                            text: newText,
                            type: this.state.questions.type
                        }
                    )
                } else {
                    return (
                        {
                            text: currentText.text,
                            type: this.state.questions.type
                        }
                    )
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
            <div className={css(styles.mainContainer)}>
                <div className={css(styles.writeSection)}>
                    <div className={css(styles.buttonContainer)}>
                        <Button onClick={this.handleClickQuestion} color="white" text="Add question" size="long"/>
                        <Button onClick={this.handleClickAnswer} color="blue" text="See answer" size="long"/>
                    </div>
                    <div>
                        <div>{this.state.questions.map((value, index) => <QuestionsToType
                            index={index}
                            value={value.text}
                            type={value.type}
                            key={'write-q' + index}
                            handleInputChange={this.handleInputChange}
                            handleRemoveClick={this.handleRemoveClick}
                        />)}</div>
                    </div>
                </div>
                <div className={css(styles.seeSection)}>
                    <div>{this.state.questions.map((item, index) => <QuestionsToShow
                        key={"see-q" + index}
                        index={index}
                        item={item.text}
                    />)}</div>
                </div>
            </div>
        );
    }
}

const styles = StyleSheet.create({
    mainContainer: {
        boxSizing: 'border-box'
    },

    writeSection: {
        float: 'left',
        padding: '1.5rem',
        width: '50%',
        boxSizing: 'border-box'
    },

    buttonContainer: {
        display: 'flex',
        justifyContent: 'space-between'
    },

    seeSection: {
        float: 'right',
        borderLeft: '1px solid grey',
        height: '100vh',
        padding: '1.5rem',
        width: '50%',
        boxSizing: 'border-box'
    },

});

export default App;
