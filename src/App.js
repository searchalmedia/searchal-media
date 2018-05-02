import {Link, Route, Switch, BrowserRouter} from 'react-router-dom';
import React, { Component } from 'react';
import { Provider } from 'react-redux'
import store from './stores/store'
import './App.css';
import Search from './components/search';
import Tweets from './components/tweets';
import BotScore from './components/botscore';

//add routing configuration
class App extends Component {
    render() {

        return (
            <div className="App">
                <Provider store={store}>
                    <BrowserRouter>
                        <Switch>
                            <Route exact path="/" component={Search}/>
                            <Route path="/tweets" component={Tweets}/>
                            <Route path="/botscore" component={BotScore}/>
                        </Switch>
                    </BrowserRouter>
                </Provider>
            </div>
        );
    }
}

export default App;
