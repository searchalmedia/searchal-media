import React, { Component } from 'react';
import SearchHeader from "./searchheader";

class Tweet extends Component{
    render() {
        var tweet = this.state.tweet;
        return (
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
        )
    }
}

export default Tweet;