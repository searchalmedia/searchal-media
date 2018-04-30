import React, { Component } from 'react';
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {fetchTweet} from "../actions/tweetActions";


class Tweet extends Component{

    componentDidMount() {
        const {dispatch} = this.props;
        if (this.props.selectedTweet == null)
            dispatch(fetchTweet(this.props.tweetId));
    }

    render() {
        const TweetInfo = ({currentTweet}) => {
            return (
                <li className={"tweet" + (currentTweet.active ? ' active' : '')}>
                    <img src={currentTweet.avatar} className="avatar"/>
                    <blockquote>
                        <cite>
                            <a href={"http://www.twitter.com/" + currentTweet.screenname}>{currentTweet.author}</a>
                            <span className="screen-name">@{currentTweet.screenname}</span>
                        </cite>
                        <span className="content">{currentTweet.body}</span>
                    </blockquote>
                </li>
            );
        };
        return (
            <TweetInfo currentTweet={this.props.selectedTweet}/>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    console.log(ownProps);
    return {
        selectedTweet: state.tweet.selectedTweet,
        tweetId: ownProps.match.params.tweetId
    }
}

export default withRouter(connect(mapStateToProps)(Tweet));