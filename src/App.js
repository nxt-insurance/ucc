import React, {Component} from 'react';
import Button from './components/Button.js';
import QuestionsToType from './components/QuestionsToType';
import {QuestionsToShow} from "./components/QuestionsToShow";
import { StyleSheet, css } from 'aphrodite';



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
            <div className={css(styles.mainContainer)}>
                <div className={css(styles.writeSection)}>
                    <div>
                        <Button onClick={this.handleClickQuestion} color="blue" text="Add question" />
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
                <div className={css(styles.seeSection)}>
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
