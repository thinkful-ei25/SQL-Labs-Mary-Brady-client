import {
    FETCH_USERQUESTIONS_SUCCESS,
    FETCH_USERQUESTIONS_ERROR
} from '../actions/frontofcardactions';

const initialState = {
    userQuestions: null,
    error: null,
    userAnswer: null
};

export default function reducer(state = initialState, action) {
    if (action.type === FETCH_USERQUESTIONS_SUCCESS) {
        return Object.assign({}, state, {
            userQuestions: action.questions,
            error: null
        });
    } else if (action.type === FETCH_USERQUESTIONS_ERROR) {
        return Object.assign({}, state, {
            error: action.error
        });
    }
    else if (action.type === SUBMIT_USERANSWER_SUCCESS) {
        return Object.assign({}, state, {
            userAnswer: action.guess,
            error: null
        });
    }
    return state;
}
