import actionTypes from '../constants/actionTypes';
import runtimeEnv from '@mars/heroku-js-runtime-env';

function tweetsFetched(tweets){
    return {
        type: actionTypes.FETCH_TWEETS,
        tweets: tweets
    }
}

function tweetFetched(tweet){
    return {
        type: actionTypes.FETCH_TWEET,
        selectedTweet: tweet
    }
}

function tweetSet(tweet){
    return {
        type: actionTypes.SET_TWEET,
        selectedTweet: tweet
    }
}

export function fetchTweets(){
    const env = runtimeEnv();
    return dispatch => {
        return fetch(`${env.REACT_APP_API_URL}/tweets`,{
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            mode: 'cors'})
            .then( (response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                return response.json();
            })
            .then( (res) => {
                dispatch(tweetsFetched(res));
            })
            .catch( (e) => console.log(e) );
    }
}

export function fetchTweet(tweetId){
    const env = runtimeEnv();
    return dispatch => {
        return fetch(`${env.REACT_APP_API_URL}/tweets/${tweetId}`,{
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            mode: 'cors'})
            .then( (response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                return response.json();
            })
            .then( (res) => {
                dispatch(tweetFetched(res));
            })
            .catch( (e) => console.log(e) );
    }
}