import { combineReducers } from 'redux';
import TripReducer from './TripReducer'
import UserReducer from './UserReducer'

export default combineReducers({
    trips: TripReducer,
    user: UserReducer
})