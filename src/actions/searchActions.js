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
            mode: 'cors'
        })
            .then((res)=>{
                dispatch(searchTwitter(data.searchKey));
            })
            .catch((e)=> console.log(e));
    }
}

/*module.exports = {submitSearch: function(data){
        const env = runtimeEnv();
        return dispatch =>{
            return fetch(`https://final-api-project.herokuapp.com/search`,{
                method:'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body:JSON.stringify(data),
                mode: 'cors'
            })
                .then((res)=>{
                    dispatch(searchTwitter(data.searchKey));
                })
                .catch((e)=> console.log(e));
        }

    }} */
