import fetch from 'isomorphic-fetch';
import ActivityApi from '../api/ActivityApi'
import TripApi from '../api/TripApi'


export function createActivity(details) {
    return function(dispatch) {
        return ActivityApi.createActivity(details)
            .then(response => {
                    dispatch({
                        type: 'ADD_ACTIVITY',
                        payload: response
                    })
            })
    }
}
