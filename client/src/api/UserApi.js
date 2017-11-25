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




    // static authenticateUser(jwt) {
    //     localStorage.setItem('jwt', jwt);
    // }

    // static setUserData(object) {
    //     localStorage.setItem('user', JSON.stringify(object));
    // }

    // static isUserAuthenticated() {
    //     return localStorage.getItem('jwt') !== null;
    //   }

    // static deauthenticateUser() {
    //     localStorage.removeItem('jwt');
    //     localStorage.removeItem('user');
    // }

    // static getUser(){
    //     return JSON.parse(localStorage.getItem('user'))
    // }

}

export default UserApi