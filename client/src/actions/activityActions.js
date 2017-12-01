import fetch from 'isomorphic-fetch';
import ActivityApi from '../api/ActivityApi'


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

export function deleteActivity(id, tripId) {
    return function(dispatch) {
        return ActivityApi.deleteActivity(id)
            .then(response => {
                    dispatch({
                        type: 'DELETE_ACTIVITY',
                        payload: { id: id, tripId: tripId }
                    })
            })
    }
}
