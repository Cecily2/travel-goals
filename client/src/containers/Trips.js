import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { getTrips } from '../actions/tripActions'
import { connect } from 'react-redux'

import NewTrip from './NewTrip'


class TripsIndex extends Component {

    constructor(props) {
        super(props)
    }

    componentWillMount(){
        this.props.getTrips()
    }

    render(){
        return (
            <div>
                <div className="trips-header">
                    <NewTrip />
                </div>
                <div className="trips-body">
                    <h2>Your Trips</h2>
                </div>
            </div>

        )
    }
}


const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({getTrips: getTrips}, dispatch)
}


export default connect(null, mapDispatchToProps)(TripsIndex)