import actionTypes from '../constants/actionTypes';
import runtimeEnv from '@mars/heroku-js-runtime-env';


function getBotScore(value){
    return{
        type: actionTypes.SUBMIT_USER,
        value: value
    }
}

function botScoresFetched(botscores){
    return {
        type: actionTypes.FETCH_BOTSCORE,
        tweets: botscores
    }
}

export function submitUser(user){
    const env = runtimeEnv();
    return dispatch => {
        return fetch(`${env.REACT_APP_API_URL}/botscore?q=`+ user, {
            method:'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            mode: 'cors'})
            .then( (response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                return response.json();
            })
            .then( (res)=>{
                localStorage.setItem('userName', user);
                dispatch(getBotScore(user));
            })
            .catch((e)=> console.log(e));
    }
}

export function fetchBotScore(){
    const env = runtimeEnv();
    return dispatch => {
        return fetch(`${env.REACT_APP_API_URL}/botscore`,{
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
                dispatch(botScoresFetched(res));
            })
            .catch( (e) => console.log(e) );
    }
}