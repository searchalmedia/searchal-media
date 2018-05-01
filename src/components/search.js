import React, { Component } from 'react';
import { submitSearch } from '../actions/searchActions';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import logo from '../logo.svg';

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
           <div>
               <header className="App-header">
                   <img src={logo} className="App-logo" alt="logo" />
               </header>
                <nav class="navbar">
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
                    <form class="form-inline">
                        <input class="searchBar" placeholder="Search.." onChange={this.updateSearch} value={this.state.searchKey} type="searchKey">
                        </input>
                        <Link to="/tweets">
                            <button type="submit"onClick={this.search}>
                                <i class="fa fa-search"/>
                            </button>
                        </Link>
                    </form>
                </nav>
           </div>
        )
    }
}

const mapStateToProps = state => {
    return {
    }
}

export default connect(mapStateToProps)(Search);