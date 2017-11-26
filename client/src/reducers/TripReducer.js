function TripReducer(state = [], action){
    switch(action.type) {
        case 'LOAD_TRIPS':
            return state.concat(action.payload)
        case 'ADD_TRIP':
            return state.concat(action.payload)
        case 'ADD_ACTIVITY':
            console.log("in reducer")
            return state
        default:
            return state
    }
}

export default TripReducer