import React, { Component } from 'react';

import { connect } from 'react-redux'

import { Switch, Route } from 'react-router-dom'


class TripsShow extends Component {

    render(){

        return (
            <div>
            <br />
            <br />
            <br />
                <h2>{this.props.trip.location}</h2>
                Notes: {this.props.trip.notes}
                Date: {this.props.trip.date}
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    const trip = state.trips.find(trip => trip.id == ownProps.match.params.id)
    if(trip){
        return { trip }
    } else {
        return { trip: {} }
    }
}



export default connect(mapStateToProps, null)(TripsShow)