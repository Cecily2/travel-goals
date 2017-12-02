import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
// Import containers
import TripShow from './containers/TripShow'
import SignUp from './containers/SignUp'
import LogIn from './containers/LogIn'
import LogOut from './containers/LogOut'
// Import components
import Home from './components/Home'
import Navbar from './containers/Navbar'
import TripIndex from './components/TripIndex'
import Map from './components/Map'

import { bindActionCreators } from 'redux';
import { getTrips } from './actions/tripActions'
import { connect } from 'react-redux'
import { withRouter } from 'react-router';


class App extends Component {
  // If no trips are in props, call the getTrips action
  componentDidMount(){
    if(this.props.trips.length === 0){
      this.props.getTrips()
    }
  }

  render() {
    return (
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" render={(props) => (<Home {...props} loggedIn={this.props.loggedIn} />)} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/login" component={LogIn} />
          <Route exact path="/logout" component={LogOut} />
          <Route exact path="/trips" render={(props) => (<TripIndex {...props} trips={this.props.trips} /> )} />
          <Route path="/trips/:id" component={TripShow} />
          <Route exact path="/map" render={(props) => (<Map {...props} trips={this.props.trips} /> )} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { trips: state.trips  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({getTrips: getTrips}, dispatch)
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(App)
)

