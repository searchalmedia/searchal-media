import constants from '../constants/actionTypes';

var initialState = {
    searchKey: localStorage.getItem('searchKey') ? localStorage.getItem('searchKey') : ''
}

export default (state = initialState, action) => {

    var updated = Object.assign({}, state);

    switch (action.type) {
        case constants.SUBMIT_SEARCH:
            updated['searchKey'] = action.searchKey;
            return updated;

        default:
            return state;
    }
}

