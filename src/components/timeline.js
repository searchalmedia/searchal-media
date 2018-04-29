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



});
