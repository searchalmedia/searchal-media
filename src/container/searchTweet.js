import React, { Component } from 'react';
import {connect} from 'react-redux';
import logo from './logo.svg';
import { Glyphicon, Button, Form, FormControl, FormGroup, Col, ControlLabel } from 'react-bootstrap'
import {searchTwitter} from '../searchTwitter'

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Searchal Media</h1>
                </header>
            </div>
        );
    }
}

class searchTweet extends Component {

    constructor(props) {
        super(props);
        this.focus = true;
        this.state = {
            value : "",
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event){
        this.setState({value: event.target.value});
    }
    render(){
        return(
            <div>
                <Form horizontal>

                    <FormGroup controlId="formHorizontalKey">
                        <Col componentClass={ControlLabel} sm={2}>
                            Key
                        </Col>
                        <Col sm={10}>
                            <FormControl
                                type="key"
                                placeholder="Search words"
                                onChange={this.handleChange}
                            />
                        </Col>
                    </FormGroup>

                    <FormGroup>
                        <Col smOffset={2} sm={10}>
                        <Button
                            bsStyle="info"
                            onClick={() => this.props.searchTwitter(this.state.value)}
                            autoFocus={this.focus}>Search
                            <Glyphicon glyph="search"/>
                        </Button>
                        </Col>
                    </FormGroup>
                </Form>
            </div>
        );
    }
}

class SearchPageRender extends Component {
    render(){
        console.log(this.props.SearchResults);
        return(
            <div>
                <App></App>
                <br/>
                <div className="container-fluid">
                    <div className="row">
                        <div className="mui-col-md-2"/>
                        <div className="mui-col-md-8">
                            <SearchTweet searchTwitter={this.props.searchTwitter}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

function matchDispatchToProps(dispatch){
    return bindActionCreators({searchTwitter: searchTwitter}, dispatch);
}

export default connect(matchDispatchToProps)(SearchPageRender);