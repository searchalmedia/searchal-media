import React, { Component } from 'react';
import Tweet from "./tweet";
import Tweets from './tweets';


class Timeline extends Component {
    render(tweets){
        return (
            <div className="tweets-app">
                <Tweets tweets={this.props.tweets} />
            </div>
        )

    }

}

export default Timeline;