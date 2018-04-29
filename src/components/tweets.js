var React = require('react');
var Tweet = require('./tweet');

module.exports = Tweets = React.createClass({

    render: function() {

        var content = this.props.tweets.map(function(tweet){
            return (
                <Tweet key={tweet.id} tweet={tweet} />
            )
        });

        return (
            <ul className="tweets">{content}</ul>
        )
    }

});