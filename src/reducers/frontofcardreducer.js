import {
    FETCH_USERQUESTIONS_SUCCESS,
    FETCH_USERQUESTIONS_ERROR
} from '../actions/frontofcardactions';

const initialState = {
    data: '',
    error: null
};

export default function reducer(state = initialState, action) {
    if (action.type === FETCH_USERQUESTIONS_SUCCESS) {
        return Object.assign({}, state, {
            data: action.data,
            error: null
        });
    } else if (action.type === FETCH_USERQUESTIONS_ERROR) {
        return Object.assign({}, state, {
            error: action.error
        });
    }
    return state;
}
