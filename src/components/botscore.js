import React, { Component } from 'react';
import {connect} from "react-redux";
import {fetchTweets} from "../actions/tweetActions";
import {fetchBotScore, submitUser} from "../actions/botActions";
import React_Tweet from 'react-tweet';
import logo from '../logo.svg';
import { Link } from 'react-router-dom';
import {submitSearch} from "../actions/searchActions";


class BotScore extends Component{

    constructor(props) {
        super(props);
        this.mapUsers=this.mapUsers.bind(this);
    }

    componentDidMount() {
        const {dispatch} = this.props;
        dispatch(fetchTweets());
    }

    mapUsers(tweets) {
        let userData = tweets.map((tweet) => ({
            user : {
                name: tweet.author,
                screen_name: tweet.screenName,
                profile_image_url: tweet.avatar
            },
            text: "Gordon Zhong from Web API at UCD sucks"
        }));

        return userData;
    }

    render() {
        const Botline = ({tweets}) => {
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
                <Botline tweets={this.mapUsers(this.props.tweets)}/>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        tweets: state.tweet.tweets
    }
}

export default connect(mapStateToProps)(BotScore);