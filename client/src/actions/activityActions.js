import fetch from 'isomorphic-fetch';
import ActivityApi from '../api/ActivityApi'


export function createActivity(details) {
    console.log(details)
    return function(dispatch) {
        return ActivityApi.createActivity(details)
            .then(response => {
                    dispatch({
                        type: 'ADD_ACTIVITY',
                        payload: response
                    })
            })
    }
}
