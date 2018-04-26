import actionTypes from '../constants/actionTypes';
import runtimeEnv from '@mars/heroku-js-runtime-env';

function searchTwitter(searchKey){
    return{
        type: actionTypes.SUBMIT_SEARCH,
        searchKey: searchKey
    }
}

export function submitSearch(data){
    const env = runtimeEnv();
    return dispatch =>{
        return fetch(`${env.REACT_APP_API_URL}/search`,{
            method:'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(data),
            mode: 'cors'})
            .then( (response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                return response.json();
            })
            .then( (res)=>{
                localStorage.setItem('searchKey', data);
                dispatch(searchTwitter(data));
            })
            .catch((e)=> console.log(e));
    }
}
