import fetch from 'isomorphic-fetch';
import TripApi from '../api/TripApi'

export function getTrips() {
    return function(dispatch) {
        return TripApi.tripList()
            .then(response => {
                    dispatch({
                        type: 'LOAD_TRIPS',
                        payload: response
                    })
            })
    }
}


export function createTrip(details) {
    return function(dispatch) {
        return TripApi.createTrip(details)
            .then(response => {
                    dispatch({
                        type: 'ADD_TRIP',
                        payload: response
                    })
            })
    }
}
