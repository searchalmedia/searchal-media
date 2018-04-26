import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import{submitSearch} from './actions/searchActions'
import SearchBar from 'material-ui-search-bar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Searchal Media</h1>
        </header>
        <p className="App-intro">
        </p>
          <SearchBar
              onChange={() => console.log('onChange')}
              onRequestSearch={() => this.props.submitSearch(this.state.value)}
              style={{
                  margin: '0 auto',
                  maxWidth: 800
              }}
          />

      </div>
    );
  }

}


export default App;
