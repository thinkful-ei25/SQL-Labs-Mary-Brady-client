'use strict';

import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import requiresLogin from './requires-login';
import { userGuess, fetchUserQuestions } from '../actions/frontofcardactions';
import { guessDismount } from '../actions/backofcardactions';
import { Link } from 'react-router-dom';

import TitleBanner from './titlebanner';

import './frontofcard.css';

export class FrontOfCard extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchUserQuestions());
  }
  guessSubmit() {
    const guess = this.refs.userguess.value;
    this.props.dispatch(guessDismount());
    return this.props.dispatch(userGuess(guess, this.props.history));
  }
  createFrontCard() {
    const currentQuestion = this.props.currentQuestion;

    return (
      <div className="dashboard-layout">
        <div className="background-image" />
        {/* top part of dashboard */}
        <div className="dashboard-top">
          {/* top bar of dashboard */}
          <div className="dashboard-background">
            <div className="dashboard-banner">
              <div className="welcome-message-prompt">
                <TitleBanner title="SQL Learning Labs: Basics" />
              </div>
            </div>
          </div>
          {/* End of top bar of dashboard */}

          <div className="dashboard-main">
            <div className="question-card-size">
              <div className="question-card">
                <div className="card-image">
                  <div className="card-img-overlay">
                    <span className="question-num">Question #1</span>
                  </div>
                </div>
                <div className="card-question">
                  <p>
                    {currentQuestion.userQuestion
                      ? currentQuestion.userQuestion
                      : 'Loading.......'}
                  </p>
                </div>
                <div className="card-input" />
              </div>
            </div>

            {/* <div className="dashboard-box">
              <div className="title">
                <h1> 📗 SQL Beginner </h1>
              </div>
              <h3 className="level">10 questions | Lifetime Score: 75%</h3>
              <div className="about-cards">
                SQL Learning Labs is a platform made to test your knowledge of
                SQL Bash commands, and to help you accelerate your learning.
              </div>
              <Link to="/frontofcard">
                <button>SQL Basics</button>
              </Link>
            </div> */}
            {/* <div className="dashboard-box">
              <div className="title">
                <h1> 🔖 SQL Intermediate </h1>
              </div>
              <h3 className="level">Coming Soon</h3>
              <div className="about-cards">
                SQL Learning Labs is a platform made to test your knowledge of
                SQL Bash commands, and to help you accelerate your learning.
              </div>
            </div> */}
          </div>
        </div>
      </div>
    );
  }

  rerender() {
    return <div className="x">{this.createFrontCard()}</div>;
  }

  render() {
    if (this.props.loading) {
      return <h2>Loading...</h2>;
    } else {
      return this.rerender();
    }
  }
}

// user: test1
// userquestions: [{question: 1 answer: 1 correct: 0 incorrect :0},
// {question: 2 answer: 2 correct: 0 incorrect :0}

const mapStateToProps = state => {
  return {
    currentQuestion: state.frontofcardReducer,
    questionID: state.frontofcardReducer.userQuestionID
  };
};

export default withRouter(
  requiresLogin()(connect(mapStateToProps)(FrontOfCard))
);

// <div className="card with_shadow card_correct">
//     <div className="arrow_box">
//         <h2>SQL Question</h2>
//         <p>{currentQuestion.userQuestion ? currentQuestion.userQuestion : 'Loading.......'}</p>
//     </div>
//     Your Guess: <input type="text" ref="userguess" required></input>
//     <div>
//         <button onClick={() => this.guessSubmit()} type="input">Submit</button>
//     </div>
// </div>
