// Action types
export const INCREMENT = 'INCREMENT'
export const DECREMENT = 'DECREMENT'
export const INCREMENT_ASYNC_START = 'INCREMENT_ASYNC_START'
export const INCREMENT_ASYNC_SUCCESS = 'INCREMENT_ASYNC_SUCCESS'
export const INCREMENT_ASYNC_FAILURE = 'INCREMENT_ASYNC_FAILURE'

// Synchronous action creators
export const increment = () => ({
    type: INCREMENT
})
export const decrement = () => ({
    type: DECREMENT
})

// Async action creator with thunk
export const incrementAsync = () => {
    return async (dispatch) => {
        try {
            dispatch({ type: INCREMENT_ASYNC_START })
            //simulate API call
            await new Promise(resolve => setTimeout(resolve, 1000))
            dispatch({ type: INCREMENT_ASYNC_SUCCESS })
            dispatch(increment())
        } catch (error) {
            dispatch({
                type: INCREMENT_ASYNC_FAILURE,
                payload: error.message
            })
        }
    }
}