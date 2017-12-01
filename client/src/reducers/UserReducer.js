import initialUserState from './initialUserState'

function UserReducer(state = initialUserState(), action){
    switch(action.type) {
        case 'SUCCESS':
            return {
                ...state,
                session: true,
                id: action.payload.id,
                email: action.payload.email,
                name: action.payload.name
            }
        case 'FAILURE':
            return { ...state, error: action.payload}

        case 'LOG_OUT':
            // redirect the user here??
            return !!localStorage.jwt

        default:
            return state
    }

}

export default UserReducer