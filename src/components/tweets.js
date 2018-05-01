import React, { Component } from 'react';
import {connect} from "react-redux";
import Tweet from './tweet';
import {fetchTweets} from "../actions/tweetActions";

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

                            <div class= "card">
                                <img class="card-img-top" src={tweet.avatar} alt="Card img cap"/>
                                <blockquote>
                                    <cite>
                                        <a href={"http://www.twitter.com/" + tweet.author}>{tweet.author}</a>
                                        <span className="screen-name">@{tweet.author}</span>
                                    </cite>
                                    <span className="content">{tweet.body}</span>
                                </blockquote>

                            </div>

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