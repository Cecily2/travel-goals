import React, { Component } from 'react';

import { connect } from 'react-redux'

import ActivityList from '../components/ActivityList'
import NewActivity from './NewActivity'


class TripsShow extends Component {


    render(){

        return (
            <div>
            <div className="trip-header">

            </div>
            <div className="trips-body">
                    <h2>{this.props.trip.location}</h2>
                    Notes: {this.props.trip.notes}
                    Date: {this.props.trip.date}

                    <ActivityList activities={this.props.trip.activities} />
                    <NewActivity />
              </div>
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