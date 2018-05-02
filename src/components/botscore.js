import React, { Component } from 'react';
import { connect } from "react-redux";
import { fetchBotScore } from "../actions/botActions";
import logo from '../logo.svg';
import { Link } from 'react-router-dom';
import React_Tweet from 'react-tweet';


class BotScore extends Component{

    constructor(props) {
        super(props);
        this.mapBot=this.mapBot.bind(this);
    }

    componentDidMount() {
        const {dispatch} = this.props;
        dispatch(fetchBotScore());
    }

    mapBot(botScores) {
        let botData = botScores.map((bot) => ({
            id_str: bot.id_str,
            user: {
                name: bot.name,
                screen_name: bot.screenName,
                profile_image_url: bot.avatar
            },
            text: bot.screenName +" chance of being a bot is" + bot.score * 100 + "%"
        }));

        return botData;
    }

        render() {
            const BotInfo = ({currentBotScore}) => {
                if (currentBotScore.length === 0)
                {
                    return (<div>Loading...</div>);
                }
                else {
                    return (
                        currentBotScore.map((object, i) => <React_Tweet data={object} key={i}/>)

                    )
                }
            };
            
            return (
                <div align="center">
                    <Link to="/tweets">
                        <header className="App-header">
                            <img src={logo} className="App-logo" alt="logo" />
                        </header>
                    </Link>
                    <BotInfo currentBotScore={this.mapBot(this.props.botScores)}/>
                </div>
            );
        }
    }


const mapStateToProps = state => {
    return {
        botScores: state.bot.botScores
    }
}

export default connect(mapStateToProps)(BotScore);