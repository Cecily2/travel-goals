import React from 'react';

import NewTrip from './NewTrip'
import Trip from '../components/Trip'
import TripList from '../components/TripList'

import { bindActionCreators } from 'redux';
import { getTrips } from '../actions/tripActions'
import { connect } from 'react-redux'

class TripIndex extends React.Component  {

    constructor(){
        super()
    }

    componentDidMount(){
        if(this.props.trips.length === 0){
          this.props.getTrips()
        }
      }

        render(){

            const trips = this.props.trips
            .sort((a, b) => b.id - a.id)
            .map((trip) => (<Trip key={trip.id} trip={trip} />) )

            return (
                <div>
                    <NewTrip />
                    <TripList>{trips}</TripList>
                </div>
            )
        }


}

const mapStateToProps = (state, ownProps) => {
    return { trips: state.trips }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({getTrips: getTrips}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(TripIndex)