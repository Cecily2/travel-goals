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
