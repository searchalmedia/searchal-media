import React, { Component } from 'react';
import {connect} from "react-redux";
import { fetchBotScore } from "../actions/botActions";
import logo from '../logo.svg';
import { Link } from 'react-router-dom';


class BotScore extends Component{

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const {dispatch} = this.props;
        dispatch(fetchBotScore());
    }

        render() {
            const BotInfo = ({currentBotScore}) => {
                return (
                    <div align="center">
                        <Link to="/tweets">
                            <header className="App-header">
                                <img src={logo} className="App-logo" alt="logo" />
                            </header>
                        </Link>
                        <div>
                            {currentBotScore.score}
                        </div>
                    </div>
                );
            };
            return (
                <BotInfo currentBotScore={this.props.botScores}/>
            );
        }
    }

const mapStateToProps = state => {
    return {
        botScores: state.bot.botScores
    }
}

export default connect(mapStateToProps)(BotScore);