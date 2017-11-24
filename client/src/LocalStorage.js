class LocalStorage {
    static authenticateUser(jwt) {
        localStorage.setItem('jwt', jwt);
    }

    static setUserData(object) {
        localStorage.setItem('user', JSON.stringify(object));
    }

    static isUserAuthenticated() {
        return localStorage.getItem('jwt') !== null;
      }

    static deauthenticateUser() {
        localStorage.removeItem('jwt');
        localStorage.removeItem('user');
    }

    static getUser(){
        return JSON.parse(localStorage.getItem('user'))
    }

}

export default LocalStorage