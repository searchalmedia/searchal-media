var twit = require('twit'); // import twit package for twitter API calls

var config = require('./config'); // import configuration file for tokens

var twitter = new twit(config.twitter); // new twit instance

export const searchTwitter = (key) => {
    twitter.get('search/tweets', key, searchedData);

    function searchedData(err, data, response) {

        console.log(data);
    }
};




