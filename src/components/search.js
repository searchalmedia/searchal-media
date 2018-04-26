import React, { Component } from 'react';
import { submitSearch } from '../actions/searchActions';
import { connect } from 'react-redux';
import { Col, Form, FormGroup, FormControl, Button } from 'react-bootstrap';

class Search extends Component {

    constructor(props) {
        super(props);
        this.updateSearch = this.updateSearch.bind(this);
        this.search = this.search.bind(this);

        this.state = {
                value: '',
        };
    }

    updateSearch(event){
       // let updateSearch = Object.assign({}, this.state.value);

        let updateSearch = event.target.value;
        this.setState({
            value: updateSearch
        });
    }

    search() {
        const {dispatch} = this.props;
        dispatch(submitSearch(this.state.value));
    }

    render(){
        return (
            <Form horizontal>
                <FormGroup controlId="search">
                    <Col sm={10}>
                        <FormControl onChange={this.updateSearch} value={this.state.value} type="searchKey" placeholder="Search" />
                    </Col>
                </FormGroup>
                <FormGroup>
                    <Col smOffset={2} sm={10}>
                        <Button onClick={this.search}>Search</Button>
                    </Col>
                </FormGroup>
            </Form>
        )
    }
}

const mapStateToProps = state => {
    return {
    }
}

export default connect(mapStateToProps)(Search);