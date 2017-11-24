import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home'
import Trips from './containers/Trips'
import TripShow from './containers/TripShow'
import SignUp from './containers/SignUp'
import LogIn from './containers/LogIn'

import LocalStorage from './LocalStorage'


class App extends Component {
  render() {

    const userInfo = () => {
      if(LocalStorage.isUserAuthenticated()){
        return (
          <div>
            Welcome, {LocalStorage.getUser().name}!
          </div>
        )
      }
    }

    return (
      <div>
        <div>
          {userInfo()}
        </div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/login" component={LogIn} />
          <Route exact path="/trips" component={Trips} />
          <Route path="/trips/:id" component={TripShow} />
        </Switch>
      </div>
    );
  }
}

export default App;
