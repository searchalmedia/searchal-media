import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import searchReducer from '../reducers/searchReducer';
import tweetReducer from '../reducers/tweetReducer';
const middlewares = [thunk];

if (process.env.NODE_ENV === `development`) {
    const { logger } = require(`redux-logger`);

    middlewares.push(logger);
}

const store = createStore(
    combineReducers({
        search: searchReducer,
        tweet: tweetReducer
    }),
    applyMiddleware(
        ...middlewares
    )
);

export default store;