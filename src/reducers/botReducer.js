import constants from '../constants/actionTypes';

var initialState = {
    value: localStorage.getItem('userName') ? localStorage.getItem('userName') : ''
}

export default (state = initialState, action) => {

    var updated = Object.assign({}, state);

    switch (action.type) {
        case constants.FETCH_BOTSCORE:
            updated['userName'] = action.userName;
            return updated;

        default:
            return state;
    }
}