'use strict';

import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import requiresLogin from './requires-login';
import { userGuess, fetchUserQuestions } from '../actions/frontofcardactions';
import { guessDismount } from '../actions/backofcardactions';


export class FrontOfCard extends React.Component {
    componentDidMount() {

        this.props.dispatch(fetchUserQuestions());
    }
    guessSubmit() {
        const guess = this.refs.userguess.value;
        this.props.dispatch(guessDismount())
        return this.props.dispatch(userGuess(guess, this.props.history))
    }
    createFrontCard() {

        const currentQuestion = this.props.currentQuestion;

        return (

            <div className="card with_shadow card_correct">
                <div className="arrow_box">
                    <h2>SQL Question</h2>
                    <p>{currentQuestion.userQuestion ? currentQuestion.userQuestion : 'Loading.......'}</p>
                </div>
                Your Guess: <input type="text" ref="userguess" required></input>
                <div>
                    <button onClick={() => this.guessSubmit()} type="input">Submit</button>
                </div>
            </div>
        )
    }


    rerender() {
        return <div className="x">{this.createFrontCard()}</div>
    }

    render() {
        if (this.props.loading) {
            return <h2>Loading...</h2>
        } else {
            return this.rerender();
        }
    }
}

// user: test1
// userquestions: [{question: 1 answer: 1 correct: 0 incorrect :0},
// {question: 2 answer: 2 correct: 0 incorrect :0}

const mapStateToProps = (state) => {
    return ({
        currentQuestion: state.frontofcardReducer,
        questionID: state.frontofcardReducer.userQuestionID,
    });
};

export default withRouter(requiresLogin()(connect(mapStateToProps)(FrontOfCard)));