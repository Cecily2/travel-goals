import React, { Component } from 'react';

import { connect } from 'react-redux'

import ActivityList from '../components/ActivityList'
import NewActivity from './NewActivity'


class TripsShow extends Component {

    render(){

        const style = { backgroundImage: `url(${this.props.trip.image})` }

        return (
            <div>
            <div className="trip-header" style={style}>

            </div>
            <div className="trips-body">
                    <h2>{this.props.trip.location} <span className="trip-show-date">{this.props.trip.date}</span></h2>

                    <div className="trip-notes">
                    {this.props.trip.notes}
                    </div>


                    <ActivityList activities={this.props.trip.activities} />
                    <NewActivity tripId={this.props.trip.id} />
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