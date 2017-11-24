import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home'
import Trips from './containers/Trips'
import TripShow from './containers/TripShow'

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/trips" component={Trips} />
          <Route path="/trips/:id" component={TripShow} />
        </Switch>
      </div>
    );
  }
}

export default App;
