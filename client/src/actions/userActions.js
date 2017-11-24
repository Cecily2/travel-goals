import fetch from 'isomorphic-fetch';

export function signUp(credentials) {
    return function(dispatch) {
        return fetch('/api/users',
            {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({user: credentials})
            }).then(response => response.json())
            .then(response => {
                if(response.jwt) {
                    localStoarge.setItem("jwt", response.jwt)
                    localStorage.setItem("user", JSON.stringify({
                        id: response.id, email: response.email, name: response.name
                    }))

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