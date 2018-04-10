import * as t from '../actions/actionTypes'

function TripReducer(state = [], action){
    switch(action.type) {
        case t.LOAD_TRIPS:
            return state.concat(action.payload)
        case t.ADD_TRIP:
            const trip = {...action.payload, activities: []}
            return state.concat(trip)

        case t.DELETE_TRIP:
            const trips = state.filter(trip => trip.id !== action.payload)
            return trips

        case t.ADD_ACTIVITY:
            return state.map(trip => trip.id === action.payload.trip_id ?
                { ...trip, activities: trip.activities.concat(action.payload) } :
                trip
            )

        case t.DELETE_ACTIVITY:
            return state.reduce((newState, trip) => {
                return newState.concat(
                (action.payload.tripId === trip.id) ?
                    Object.assign({}, trip, {activities: trip.activities.filter((activity) => activity.id !== action.payload.id)}) :
                    trip
                );
            }, []);

        case t.LOG_OUT:
            return []

        default:
            return state
    }
}

export default TripReducer