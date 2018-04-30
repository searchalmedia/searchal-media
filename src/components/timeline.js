var React = require('react');
var Tweets = require('./tweets');

module.exports = Timeline = React.createclass({

   addTweet: function(tweet){

       var updated = this.state.tweets;

       var count = this.state.count + 1;

       var skip = this.state.skip + 1;

       updated.unshift(tweet);

       this.setState({tweets: updated, count: count, skip: skip});

   },

   getPage: function(page){

       var request = newXMLHttpRequest(), self = this;
       request.open('GET', 'page/' + page + "/" + this.state.skip, true);
       request.onload = function() {

           if(request.status >= 200 && request.status < 400){
               self.loadPagedTweets(JSON.parse(request.responseText));
           }
           else{
               self.setState({paging: false, done: true});
           }
       };

       request.send();

   },

    showNewTweets: function () {

       var updated =this.state.tweets;

       updated.forEach(function(tweet){
           tweet.active = true;
       });

       this.setState({tweets: updated, count: 0});

    },

    loadPagedTweets: function(tweets){

       var self = this;

       if(tweets.length > 0) {

           var updated = this.state.tweets;

           tweets.forEach(function(tweet) {
               updated.push(tweet);
           });

       }
       else{
           this.setState({done: true, paging: false});
       }
    },

    getInitialState: functi

});
