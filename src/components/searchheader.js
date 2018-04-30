import React, { Component } from 'react';
import logo from '../logo.svg';
import {LinkContainer} from 'react-router-bootstrap';
import {connect} from "react-redux";
import { withRouter } from "react-router-dom";

class SearchHeader extends Component {

    render() {
        return (
            <div>
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Searchal Media</h1>
                </header>
            </div>
        );
    }
}

export default SearchHeader;