function TripReducer(state = [], action){
    switch(action.type) {
        case 'LOAD_TRIPS':
            return state.concat(action.payload)
        case 'ADD_TRIP':
            return state.concat(action.payload)
        case 'ADD_ACTIVITY':
            return state.map(trip => trip.id === action.payload.trip_id ?
                { ...trip, activities: trip.activities.concat(action.payload) } :
                trip
            )

        default:
            return state
    }
}

export default TripReducer