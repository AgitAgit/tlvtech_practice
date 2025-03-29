import {
    INCREMENT,
    DECREMENT,
    INCREMENT_ASYNC_START,
    INCREMENT_ASYNC_SUCCESS,
    INCREMENT_ASYNC_FAILURE
} from '../actions/counterActions.js'

const initialState = {
    count: 0,
    loading: false,
    error: null
}

const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                count: state.count + 2
            }
        case DECREMENT:
            return {
                ...state,
                count: state.count - 1
            }
        case INCREMENT_ASYNC_START:
            return {
                ...state,
                loading: true,
                error: null
            }
        case INCREMENT_ASYNC_SUCCESS:
            return {
                ...state,
                loading: false
            }
        case INCREMENT_ASYNC_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default: 
            return state
    }
}

export default counterReducer