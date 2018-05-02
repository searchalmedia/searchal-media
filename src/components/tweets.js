import React, { Component } from 'react';
import {connect} from "react-redux";
import {fetchTweets} from "../actions/tweetActions";
import React_Tweet from 'react-tweet';
import logo from '../logo.svg';
import { Link } from 'react-router-dom';
import {submitUser} from "../actions/botActions";

class Tweets extends Component{

    constructor(props) {
        super(props);
        this.mapTweets=this.mapTweets.bind(this);
        this.mapUsers=this.mapUsers.bind(this);
        this.updateUser = this.updateUser.bind(this);
        this.user = this.user.bind(this);

        this.state = {
            userName: '',
        };
    }

    componentDidMount() {
        const {dispatch} = this.props;
        dispatch(fetchTweets());
    }

    updateUser(event){
        let updateUser = event.target.value;
        this.setState({
            userName: updateUser
        });
    }

    user() {
        const {dispatch} = this.props;
        dispatch(submitUser(this.state.userName));
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

    mapUsers(tweets) {
        const userData = tweets.map((tweet) => ({
                userName: tweet.screenName
        }));

        const {dispatch} = this.props;
        dispatch(submitUser(userData[0]));
    }


    render() {
        const Timeline = ({tweets}) => {
            if (tweets.length === 0)
            {
                return (<div>Loading...</div>);
            }
            else {

                const linkProps = {target: '_blank', rel: 'noreferrer'};

                return (
                        tweets.map((object, i) => <React_Tweet data={object} key={i} linkProps={linkProps}/>)
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
                <form class="form-inline">
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
                    <input class="searchBar" placeholder="Enter Username" onChange={this.updateUser} value={this.state.userName} type="userName">
                    </input>
                    <Link to="/botscores">
                        <button type="submit"onClick={this.user}>
                            <i class="fa fa-search"/>
                        </button>
                    </Link>
                </form>
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