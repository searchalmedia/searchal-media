import React, { Component } from 'react';
import {connect} from "react-redux";
import {fetchTweets} from "../actions/tweetActions";
import React_Tweet from 'react-tweet';

class Tweets extends Component{

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const {dispatch} = this.props;
        dispatch(fetchTweets());
    }

    render() {
        const Timeline = ({tweets}) => {
            // Build list items of single tweet components using map
            return (
                <ul>
                    {tweets.map((tweet) =>
                        <li className={"tweet" + (tweet.active ? ' active' : '')}>
                            <img src={tweet.avatar} className="avatar"/>
                            <blockquote>
                                <cite>
                                    <a href={"http://www.twitter.com/" + tweet.screenname}>{tweet.author}</a>
                                    <span className="screen-name">@{tweet.screenname}</span>
                                </cite>
                                <span className="content">{tweet.body}</span>
                            </blockquote>
                        </li>
                    )}
                </ul>
            )
        }

        // Return ul filled with our mapped tweets
        return (
            <Timeline tweets={this.props.tweets} />
        );
    }
}

const mapStateToProps = state => {
    return {
        tweets: state.tweet.tweets
    }
}

export default connect(mapStateToProps)(Tweets);