function TripReducer(state = [], action){
    switch(action.type) {
        case 'LOAD_TRIPS':
            return state.concat(action.payload)
        case 'ADD_TRIP':
            const trip = {...action.payload, activities: []}
            return state.concat(trip)

        case 'DELETE_TRIP':
            const trips = state.filter(trip => trip.id !== action.payload)
            return trips

        case 'ADD_ACTIVITY':
            return state.map(trip => trip.id === action.payload.trip_id ?
                { ...trip, activities: trip.activities.concat(action.payload) } :
                trip
            )

        case 'DELETE_ACTIVITY':
            return state.reduce((state, trip) => {
                return state.concat(
                (action.payload.tripId === trip.id) ?
                    Object.assign({}, trip, {activities: trip.activities.filter((activity) => activity.id !== action.payload.id)}) :
                    trip
                );
            }, []);

        case 'LOG_OUT':
            return []

        default:
            return state
    }
}

export default TripReducer