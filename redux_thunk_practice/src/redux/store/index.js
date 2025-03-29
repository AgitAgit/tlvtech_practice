import { createStore, applyMiddleware, compose } from "redux";
import { thunk } from "redux-thunk";
import reducers from '../reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ||  compose

let middleware = ''
if (process.env.NODE_ENV === 'development') {
    middleware = composeEnhancers(applyMiddleware(thunk))
} else {
    middleware = applyMiddleware(thunk)
}

const store = createStore(reducers, middleware)

export default store