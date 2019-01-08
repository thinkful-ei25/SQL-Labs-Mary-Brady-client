
import { API_BASE_URL } from '../config';
import { normalizeResponseErrors } from './utils';
import { bindActionCreators } from 'redux';


///////////Fetch Questions
export const FETCH_USERQUESTIONS_SUCCESS = 'FETCH_USERQUESTIONS_SUCCESS';
export const fetchUserQuestionsSuccess = questions => ({
    type: FETCH_USERQUESTIONS_SUCCESS,
    questions
});

export const FETCH_USERQUESTIONS_ERROR = 'FETCH_USERQUESTIONS_ERROR';
export const fetchUserQuestionsError = error => ({
    type: FETCH_USERQUESTIONS_ERROR,
    error
});


export const fetchUserQuestions = () => (dispatch, getState) => {
    const authToken = getState().authReducer.authToken;
    return fetch(`${API_BASE_URL}/user/questions`, {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${authToken}`
        }
    })
        .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .then((questions) => {

            dispatch(fetchUserQuestionsSuccess(questions))
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




