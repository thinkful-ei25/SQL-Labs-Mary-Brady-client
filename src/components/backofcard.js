'use strict';

import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import requiresLogin from './requires-login';
import { makeGuess, 
  // guessDismount
 } from '../actions/backofcardactions'



export class BackOfCard extends React.Component {
  componentDidMount() {
 
    this.props.dispatch(makeGuess(this.props.userGuess, this.props.userQuestionID));

  }

  createBackOfCard() { 
    const trueorfalse = this.props.trueorfalse;
    const questionText = this.props.questionText;
    const userGuess = this.props.userGuess;
    const correctAnswer = this.props.correctAnswer;
    const numCorrect = this.props.numCorrect;
    const numIncorrect = this.props.numIncorrect
    
    if (trueorfalse) {
      return (
        <div className="card with_shadow card_correct">
          <div className="arrow_box">
            <h1>{questionText}</h1>
            <h2>CORRECT!</h2>
            <p>Correct Answer: {correctAnswer}</p>
            <p>Your guess: {userGuess}</p>
            <p></p>
            <p>Your lifetime score on this question is:</p>
            <p>Number of times Correct: {numCorrect}</p>
            <p>Number of times Incorrect: {numIncorrect}</p>
          </div>
          <div>
            <p>Keep up the great work!</p>
            <Link to="/frontofcard"><button>Next Question</button></Link>
          </div>
        </div>
      )
    } else {
      return (
        <div className="card with_shadow card_incorrect">
          <div className="arrow_box">
            <h1>{questionText}</h1>
            <h2>Wrong....</h2>
            <p>Correct Answer: {correctAnswer}</p>
            <p>Your guess: {userGuess}</p>
            <p>Your lifetime score on this question is:</p>
            <p>Number of times Correct: {numCorrect}</p>
            <p>Number of times Incorrect: {numIncorrect}</p>
          </div>
          <div>
            <p>Keep up the great work!</p>
            <Link to="/frontofcard"><button>Next Question</button></Link>
          </div>
        </div>
      )
    }

  }

  
  render() {

    return <div className="x">{this.createBackOfCard()}</div>
  }

}

const mapStateToProps = (state, props) => {
  return ({
    questionText : (state.backofcardReducer.response)?state.backofcardReducer.response.questionText:'',
    userQuestionID : state.frontofcardReducer.userQuestionID,
    userGuess : state.frontofcardReducer.userAnswer,
    correctAnswer : (state.backofcardReducer.response)?state.backofcardReducer.response.questionAnswer:'',
    trueorfalse : (state.backofcardReducer.response)?state.backofcardReducer.response.correct:null,
    numCorrect : (state.backofcardReducer.response)?state.backofcardReducer.response.numCorrect:'',
    numIncorrect : (state.backofcardReducer.response)?state.backofcardReducer.response.numIncorrect:''

  });
};

export default requiresLogin()(connect(mapStateToProps)(BackOfCard));


