import constants from '../constants/actionTypes';

export default function(state = null, action){

switch(action.type) {
    case 'SUBMIT_SEARCH':
        state = action;
        break;

    case 'FETCH_RESULTS':
        state = action;
        break;
    }

    return state;
}