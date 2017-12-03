import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { withRouter } from 'react-router';

import Navbar from './containers/Navbar'
import Home from './components/Home'
import LogIn from './containers/LogIn'
import SignUp from './containers/SignUp'
import LogOut from './containers/LogOut'
import TripIndex from './containers/TripIndex'
import TripShow from './containers/TripShow'
import Map from './containers/Map'

class App extends Component {

  render() {
    return (
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/login" component={LogIn} />
          <Route exact path="/logout" component={LogOut} />
          <Route exact path="/trips" component={TripIndex} />
          <Route path="/trips/:id" component={TripShow} />
          <Route exact path="/map" component={Map} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App)

