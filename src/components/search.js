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
                searchKey: '',
        };
    }

    updateSearch(event){
       // let updateSearch = Object.assign({}, this.state.value);

        let updateSearch = event.target.value;
        this.setState({
            searchKey: updateSearch
        });
    }

    search() {
        const {dispatch} = this.props;
        dispatch(submitSearch(this.state.searchKey));
    }

    render(){
        return (
            <Form inline>
                <FormGroup controlId="search" bsSize="large">
                        <FormControl
                            onChange={this.updateSearch}
                            value={this.state.searchKey}
                            type="searchKey"
                            placeholder="Search"
                        />
                </FormGroup>
                <FormGroup>
                        <Button onClick={this.search}>Search</Button>
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