'use strict';

import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import requiresLogin from './requires-login';
// TODO: import fetch after creating it.
import {userGuess} from '../actions/frontofcardactions'



export class FrontOfCard extends React.Component {
    componentDidMount() {
        //dispatch the fetch
        this.props.dispatch();
    }
    guessSubmit() {
        const guess = this.refs.userquess.value;
        //console.log the guess here
        return this.props.dispatch(userGuess(guess))

            .then(() => this.props.history.push('/backofcard'))
    }
    createFrontCard() {
        // const {userAnswer, currentQuestion, numCorrect, numIncorrect} = this.props;
        // const {correctAnswer } = this.props.currentQuestion.Answer;
        // const 
        // if(userAnswer === correctAnswer) {

        //here we will possiblly have a sort, or on the reducer, or on the route! but it will be 
        //showing us the question that's "next"

        //create redux form that on submit
        //dispatches the field input 

        //map through the question and display the fields from the question object
        const currentQuestion = this.props.currentQuestion;
        return (
           
            <div className="card with_shadow card_correct">
                <div className="arrow_box">
                    <h2>SQL Question</h2>
                    <p>{currentQuestion}</p>
                </div>
                Your Guess: <input type="text" ref="userguess"></input>
                <div>
                    <button onClick={() => this.guessSubmit()} type="input">Submit</button>
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
          
          // user: test1
// userquestions: [{question: 1 answer: 1 correct: 0 incorrect :0},
// {question: 2 answer: 2 correct: 0 incorrect :0}
                
const mapStateToProps = (state) => {
  return ({
                    currentQuestion : state.userQuestion.questionText
              });
            };
            
            export default withRouter(requiresLogin()(connect(mapStateToProps)(FrontOfCard)));
            
            
