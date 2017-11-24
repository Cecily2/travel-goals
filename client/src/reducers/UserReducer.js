function UserReducer(state = { loggedIn: false, user: null }, action){
    switch(action.type) {
        case 'SUCCESS':
            return {
                ...state,
                loggedIn: !!localStorage.jwt,
                user: {
                    id: action.payload.id,
                    email: action.payload.email,
                    name: action.payload.name
                }
            }
        case 'FAILURE':
            return { ...state, error: action.payload}

        default:
            return state
    }
}

export default UserReducer