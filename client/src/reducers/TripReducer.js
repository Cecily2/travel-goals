function TripReducer(state = [], action){
    switch(action.type) {
        case 'LOAD_TRIPS':
            console.log(action.payload)
        default:
            return state
    }
}

export default TripReducer