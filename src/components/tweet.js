import React, { Component } from 'react';
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {fetchTweet} from "../actions/tweetActions";
import { Card } from "react-bootstrap";


class Tweet extends Component{

    componentDidMount() {
        const {dispatch} = this.props;
        if (this.props.selectedTweet == null)
            dispatch(fetchTweet(this.props.tweetId));
    }

    render() {
        const TweetInfo = ({currentTweet}) => {
            return (

                <div class= "card">
                    <img class="card-img-top" src={currentTweet.avatar} alt="Card img cap"/>
                    <div class="card-body">
                        <h5 class="card-title" href={"http://www.twitter.com/" + currentTweet.author}>{currentTweet.author}</h5>
                        <p class = "card-text">{currentTweet.author}</p>
                    </div>

                    <ul classs="list-group list-group-flush">
                        <li class="list-group-item"> {currentTweet.body} </li>
                    </ul>

                </div>
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