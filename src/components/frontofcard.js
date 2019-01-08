'use strict';

import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import requiresLogin from './requires-login';
// TODO: import fetch after creating it.



export class FrontOfCard extends React.Component {
  componentDidMount() {
    //dispatch the fetch
    this.props.dispatch();
  }

  createFrontCard(){
    // const {userAnswer, currentQuestion, numCorrect, numIncorrect} = this.props;
    // const {correctAnswer } = this.props.currentQuestion.Answer;
    // const 
    // if(userAnswer === correctAnswer) {
      return (
        <div className="card with_shadow card_correct">
          <div className="arrow_box">
            <h2>SQL Question</h2>
            <p>question goes here</p>
          </div>
          Your Guess: <input type="text"></input>
          <div>
            <Link to="/backofcard"><button>Submit</button></Link>
          </div>
        </div>
      )
    } 

  //displays the card after loading
  rerender(){
    return <div className="x">{this.createFrontCard()}</div>
  }

  render() {
    if(this.props.loading){
      return <h2>Loading...</h2>
    } else {
      return this.rerender();
    }
  }
}


const mapStateToProps = (state, props) => {
  const currentQuestionID = props.currentQuestion;
  return ({
    currentQuestion = state.rootReducer.currentQuestionID.question,
    numCorrect: state.rootReducer.currentQuestion.correct,
    numIncorrect: state.rootReducer.currentQuestion.incorrect
  });
};

export default requiresLogin()(connect(mapStateToProps)(Dashboard));


