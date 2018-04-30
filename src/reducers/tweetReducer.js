import constants from '../constants/actionTypes'

var initialState = {
    tweets: [],
    selectedTweet: null
}

export default (state = initialState, action) => {

    var updated = Object.assign({}, state);

    switch(action.type) {
        case constants.FETCH_TWEETS:
            updated['tweets'] = action.tweets;
            updated['selectedTweet'] = action.tweets[0];
            return updated;
        case constants.SET_TWEET:
            updated['selectedTweet'] = action.selectedTweet;
            return updated;
        case constants.FETCH_TWEET:
            updated['selectedTweet'] = action.selectedTweet;
            return updated;
        default:
            return state;
    }
}