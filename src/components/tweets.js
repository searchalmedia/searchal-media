import React, { Component } from 'react';
import {connect} from "react-redux";
import {fetchTweets} from "../actions/tweetActions";
import React_Tweet from 'react-tweet';
import logo from '../logo.svg';
import { Link } from 'react-router-dom';

class Tweets extends Component{

    constructor(props) {
        super(props);
        this.mapTweets=this.mapTweets.bind(this);
    }

    componentDidMount() {
        const {dispatch} = this.props;
        dispatch(fetchTweets());
    }

    mapTweets(tweets) {
        let tweetData = tweets.map((tweet) => ({
            id_str: tweet.twid,
            user: {
                name: tweet.author,
                screen_name: tweet.screenName,
                profile_image_url: tweet.avatar
            },
            text: tweet.body,
            created_at: tweet.date,
            favorite_count: tweet.favorites,
            retweet_count: tweet.retweets,
        }));

        return tweetData;
    }

    render() {
        const Timeline = ({tweets}) => {
            if (tweets.length === 0)
            {
                return (<div>Loading...</div>);
            }
            else {
                return (
                        tweets.map((object, i) => <React_Tweet data={object} key={i}/>)
                )
            }
        };

        // Return ul filled with our mapped tweets
        return (
            <div align="center">
                <Link to="/">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                </header>
                </Link>
                <Timeline tweets={this.mapTweets(this.props.tweets)}/>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        tweets: state.tweet.tweets
    }
}

export default connect(mapStateToProps)(Tweets);