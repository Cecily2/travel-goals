import fetch from 'isomorphic-fetch';

class UserApi {

    static createUser(credentials) {
        return fetch('/api/users',
        {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({user: credentials})
        }).then(response => response.json())
    }

    static createSession(credentials) {
        return fetch('/api/authenticate',
        {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify({user: credentials})
        }).then(response => response.json())
    }

}

export default UserApi