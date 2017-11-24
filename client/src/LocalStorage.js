class LocalStorage {
    static authenticateUser(jwt) {
        localStorage.setItem('jwt', jwt);
    }

    static setUserData(object) {
        localStorage.setItem('user', object);
    }
}

export default LocalStorage