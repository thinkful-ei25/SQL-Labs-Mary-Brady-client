
import { API_BASE_URL } from '../config';
import { normalizeResponseErrors } from './utils';
import { bindActionCreators } from 'redux';


///////////Fetch Questions
export const FETCH_USERQUESTIONS_SUCCESS = 'FETCH_USERQUESTIONS_SUCCESS';
export const fetchUserQuestionsSuccess = question => ({
    type: FETCH_USERQUESTIONS_SUCCESS,
    question
});

export const FETCH_USERQUESTIONS_ERROR = 'FETCH_USERQUESTIONS_ERROR';
export const fetchUserQuestionsError = error => ({
    type: FETCH_USERQUESTIONS_ERROR,
    error
});
export const SUBMIT_USERANSWER_SUCCESS = 'SUBMIT_USERANSWER_SUCCESS';
export const submitUserAnswerSuccess = guess => ({
    type: SUBMIT_USERANSWER_SUCCESS,
    guess
})

export const fetchUserQuestions = () => (dispatch, getState) => {
    const authToken = getState().authReducer.authToken;
    return fetch(`${API_BASE_URL}/question`, {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${authToken}`
        }
    })
        .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .then((res) => {

            dispatch(fetchUserQuestionsSuccess(res.userQuestion))
        })
        .catch(err => {
            dispatch(fetchUserQuestionsError(err));
        });
};

export const userGuess = (guess) => {
    return {
        type: SUBMIT_USERANSWER_SUCCESS,
        guess
    }
} 




