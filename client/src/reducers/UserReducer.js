import initialUserState from './initialUserState'
import * as t from '../actions/actionTypes'

function UserReducer(state = initialUserState(), action){
    switch(action.type) {
        case t.SUCCESS:
            return {
                ...state,
                session: true,
                id: action.payload.id,
                email: action.payload.email,
                name: action.payload.name
            }
        case t.FAILURE:
            return { ...state, error: action.payload}

        case t.LOG_OUT:
            return !!localStorage.jwt

        default:
            return state
    }

}

export default UserReducer