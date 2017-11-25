import fetch from 'isomorphic-fetch';
import UserApi from '../api/UserApi'

export function signUp(credentials, history, redirect) {
    return function(dispatch) {
        return UserApi.createUser(credentials)
            .then(response => {
                if(response.jwt) {
                    localStorage.setItem('jwt', response.jwt)
                    localStorage.setItem('user', JSON.stringify({
                        id: response.id, name: response.name, email: response.email
                    }))

                    history.push(redirect)

                    dispatch({
                        type: 'SUCCESS',
                        payload: response
                    })
                } else {
                    dispatch({
                        type: 'FAILURE',
                        payload: response.error
                    })
                }
            })
    }
}


export function logIn(credentials, history, redirect) {
    return function(dispatch) {
        return UserApi.createSession(credentials)
            .then(response => {
                if(response.jwt) {
                    localStorage.setItem('jwt', response.jwt)
                    localStorage.setItem('user', JSON.stringify({
                        id: response.id, name: response.name, email: response.email
                    }))
                    history.push(redirect)

                    dispatch({
                        type: 'SUCCESS',
                        payload: response
                    })
                } else {
                    dispatch({
                        type: 'FAILURE',
                        payload: response.error
                    })
                }
            })
    }
}



export function logOut() {
    console.log("LOGGING OUT")
    localStorage.removeItem('jwt')
    localStorage.removeItem('user')
    return {type: 'LOG_OUT'}
}