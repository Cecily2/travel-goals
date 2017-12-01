import React from 'react';

import NewTrip from '../containers/NewTrip'
import Trip from './Trip'
import TripList from './TripList'

const TripIndex = (props) => {
    const trips = props.trips
        .sort((a, b) => b.id - a.id)
        .map((trip) => (<Trip key={trip.id} trip={trip} />) )

    return (
        <div>
            <NewTrip />
            <TripList>{trips}</TripList>
        </div>
    )

}

export default TripIndex