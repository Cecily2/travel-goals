import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home'
import Trips from './containers/Trips'
import TripShow from './containers/TripShow'
import SignUp from './containers/SignUp'
import LogIn from './containers/LogIn'
import LogOut from './containers/LogOut'
import Navbar from './containers/Navbar'

import { bindActionCreators } from 'redux';
import { getTrips } from './actions/tripActions'
import { connect } from 'react-redux'


class App extends Component {
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
          <Route exact path="/" component={Home} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/login" component={LogIn} />
          <Route exact path="/logout" component={LogOut} />
          <Route exact path="/trips" component={Trips} />
          <Route path="/trips/:id" component={TripShow} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { trips: state.trips }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({getTrips: getTrips}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
