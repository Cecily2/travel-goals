import fetch from 'isomorphic-fetch';
import TripApi from '../api/TripApi'
import * as t from './actionTypes'

export function getTrips() {
    return function(dispatch) {
        return TripApi.tripList()
            .then(response => {
                   dispatch({
                        type: t.LOAD_TRIPS,
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
                        type: t.ADD_TRIP,
                        payload: response
                    })
            })
    }
}

export function deleteTrip(id) {
    return function(dispatch) {
        return TripApi.deleteTrip(id)
            .then(response => {
                    dispatch({
                        type: t.DELETE_TRIP,
                        payload: id
                    })
            })
    }
}