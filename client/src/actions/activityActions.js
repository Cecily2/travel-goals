import 'isomorphic-fetch';
import ActivityApi from '../api/ActivityApi'
import * as t from './actionTypes'

export function createActivity(details) {
    return function(dispatch) {
        return ActivityApi.createActivity(details)
            .then(response => {
                    dispatch({
                        type: t.ADD_ACTIVITY,
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
                        type: t.DELETE_ACTIVITY,
                        payload: { id: id, tripId: tripId }
                    })
            })
    }
}