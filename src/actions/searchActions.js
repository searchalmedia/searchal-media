import actionTypes from '../constants/actionTypes';
import runtimeEnv from '@mars/heroku-js-runtime-env';


function searchTwitter(value){
    return{
        type: actionTypes.SUBMIT_SEARCH,
        value: value
    }
}

export function submitSearch(key){
    const env = runtimeEnv();
    return dispatch => {
        return fetch(`${env.REACT_APP_API_URL}/?q=`+ key, {
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
                localStorage.setItem('searchKey', key);
                dispatch(searchTwitter(key));
            })
            .catch((e)=> console.log(e));
    }
}