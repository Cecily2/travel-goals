function TripReducer(state = [], action){
    switch(action.type) {
        case 'LOAD_TRIPS':
            return state.concat(action.payload)
        case 'ADD_TRIP':
            return state.concat(action.payload)
        default:
            return state
    }
}

export default TripReducer